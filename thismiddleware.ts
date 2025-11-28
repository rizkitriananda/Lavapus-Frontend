// // middleware.js (file di root project)
// import { NextResponse, NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   if (pathname.startsWith("/admin")) {
//     const token = request.cookies.get("auth-token")?.value;
//     if (!token) {
//       return NextResponse.redirect(new URL("/login", request.url));
//     }
//   }

//   const response = NextResponse.next();
//   response.headers.set("x-custom-header", "my-value");
//   response.headers.set("x-frame-options", "SAMEORIGIN");
//   response.headers.set("x-content-type-options", "nosniff");
//   response.headers.set("referrer-policy", "strict-origin-when-cross-origin");

//   return response;
// }

// // export const config = {
// //   matcher: ["/borrowing-history", "/community", "/admin/:path*"],
// // };
