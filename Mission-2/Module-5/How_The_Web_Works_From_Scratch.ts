/*
    Request Response Model - Client server architecture.

    URL: protocol    //         domain name             /   resource
      http and https     ip address, DNS server
                                (Domain Name Server)
    
        protocol// ip address:port ------HTTP Request-------> Server
        protocol// ip address:port <-----TCP/IP Socket Connection------- Server
        protocol// ip address:port <-----HTTP Request-------- Server

                    Method, Request headers, Request Body
    client -------------------------------------------------------->Server
                                HTTP Request

                                HTTP Response
    client <------------------------------------------------------- Server
                Status code, Response headers, Response Body

    HTTP Request:
        Methods- GET, POST, PATCH, PUT, DELETE
        Request Headers- Host: web.programming-hero.com
                     Accept-encoding: gzip, deflate, br, zstd
        Request Body-   {
                          "course":"Next Level"
                        }
    HTTP Response:
        Status code- 200/404/502 etc
        Response Headers- Access-Control-Allow-Credentials: true
                          Content-type                    : text/plain
        Response Body-  {
                            message: "Data retrieved successfully"
                            data: {....}
                        }


    TCP - Transmission Control Protocol
    IP - Internet Protocol
    Protocol = rules & regulations
*/
