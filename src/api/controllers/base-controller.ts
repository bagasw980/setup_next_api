import { NextResponse } from "next/server";

export default class BaseController {
  successResponse(data: any = [], message: string = "success") {
    return NextResponse.json({
      success: true,
      data: data,
      message: message,
    });
  }

  errorResponse(
    data: any = [],
    message: string = "failed",
    code: number = 400
  ) {
    return NextResponse.json(
      {
        success: false,
        data: data,
        message: message,
      },
      { status: code }
    );
  }
}
