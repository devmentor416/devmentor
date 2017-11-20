export function getTitle( filename: string ): string {
  const options = { year: "numeric", month: "short", day: "numeric" };
  const today = new Intl.DateTimeFormat( "en-US", options ).format( Date.now() );
  const title = `/**
* @file:   ${ filename }
* @brief:  <Short description>
*
* @author: <Full name>
* @date:   ${ today }
*
* @description
* <Enter long description>
*
* License: GNU Public License (GNU GPL)
* Copyright (c) <year> <Copyright holders>
*
* Notice: This Software is provided as-is without warrant.
*
*-------------------------------------------------------------
* CODE GUIDELINE TO BE FOLLOWED FOUND HERE:
* https://bitbucket.org/rajinder_yadav/cpp_code_guide
*------------------------------------------------------------*/`;
  return title;
}