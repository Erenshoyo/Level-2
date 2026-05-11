import type { IncomingMessage, ServerResponse } from "http";
import { insertProduct, readProduct } from "../service/product.service";
import type { IProduct } from "../types/product.type";
import { parseBody } from "../utils/parseBody";
import { sendResponse } from "../utils/sendResponse";

export const productController = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const url = req.url;
  const method = req.method;
  const products = readProduct(); //! We get an array here like this [{},{},{}]
  //? Splitting the URL in arrays(string).
  const urlParts = url?.split("/");

  //? Extracting id from the URL
  const id =
    urlParts && urlParts[1] === "products" ? Number(urlParts[2]) : null;

  if (url === "/products" && method === "GET") {
    try {
      return sendResponse(
        res,
        200,
        true,
        "Product Retrieved Successfully!",
        products,
      );
    } catch (error) {
      return sendResponse(res, 500, false, "Something went wrong!", error);
    }
  } else if (
    method === "GET" &&
    id !== null
  ) //! Code for getting single product
  {
    // const products = readProduct();
    const product = products.find((p: IProduct) => p.id === id);

    if (!product) {
      sendResponse(res, 404, false, "No product found!", null);
    }

    try {
      return sendResponse(
        res,
        200,
        true,
        "Product Retrieved Successfully!",
        product,
      );
    } catch (error) {
      return sendResponse(res, 500, false, "Something went wrong!", error);
    }
  } else if (method === "POST" && url === "/products") {
    const body = await parseBody(req);
    const newProduct = {
      id: Date.now(),
      ...body,
    };
    products.push(newProduct);
    // console.log(products);

    insertProduct(products); //! Overwriting the data of db,json with the new product lists.
    try {
      return sendResponse(
        res,
        200,
        true,
        "Product created Successfully!",
        newProduct,
      );
    } catch (error) {
      return sendResponse(res, 500, false, "Something went wrong!", error);
    }
  } else if (method === "PUT" && id !== null) {
    const body = await parseBody(req);

    const index = products.findIndex((p: IProduct) => p.id === id);
    if (index < 0) {
      return sendResponse(res, 404, false, "Product not found!", null);
    }

    products[index] = { id: products[index].id, ...body };

    insertProduct(products);

    try {
      return sendResponse(
        res,
        200,
        true,
        "Product updated Successfully!",
        products[index],
      );
    } catch (error) {
      return sendResponse(res, 500, false, "Something went wrong!", error);
    }
  } else if (method === "DELETE" && id !== null) {
    const index = products.findIndex((p: IProduct) => p.id === id);

    if (index < 0) {
      res.writeHead(404, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Product not found!",
          data: null,
        }),
      );
    }

    products.splice(index, 1);
    insertProduct(products);

    try {
      return sendResponse(
        res,
        200,
        true,
        "Product deleted Successfully!",
        products[index],
      );
    } catch (error) {
      return sendResponse(res, 500, false, "Something went wrong!", error);
    }
  }
};
