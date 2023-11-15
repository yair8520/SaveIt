import { NextRequest, NextResponse } from "next/server";
import "firebase/auth";
import { auth } from "./Config/Firebase";
export default function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const protectedRoutes = ["/", "Route1", "Route2"];
  console.log("middleware");
  if (path.startsWith("/_next")) {
    return NextResponse.next();
  }

  return NextResponse.next();
}
export const config = {
  matcher: "/dashBoard",
};
