import { NextResponse } from "next/server";
const fs = require('fs')

//return entire JSON data; MOCK fetch request
export async function GET(request, context) {
  const jsonFilePath = "./lib/stackline_frontend_assessment_data_2021.json"
  const data = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'))
  return NextResponse.json(data[0]);
}
