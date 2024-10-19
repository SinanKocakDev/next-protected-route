import { NextResponse, userAgent } from "next/server";
import { getSession } from "./utils/getSession";

export const middleware = async (request) => {
  console.log("middleware is running!");
  const session = await getSession();
  console.log({ session });
  const userNavigatingRoute = request.nextUrl.pathname;
  console.log({ userNavigatingRoute });

  if (session) {
    if(
        userNavigatingRoute === "/login" ||
        userNavigatingRoute === "/register"
    ) {
        return NextResponse.redirect(new URL("/", request.url));
    }
    if (userNavigatingRoute.startsWith("/admin") && session.role !== admin) {
      return NextResponse.redirect(new URL("/not-found", request.url));
    }
  } else {
    if (
      userNavigatingRoute.startsWith("/admin") ||
      userNavigatingRoute.startsWith("/user")
    ) {
      return NextResponse.redirect(new URL("/not-found", request.url));
    }
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/user/:path*", "/admin/:path*", "/login", "/register"],
};

// example

/* 
/user
/user/profile
/user/profile/123

*/


