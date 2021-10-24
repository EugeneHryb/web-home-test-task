function textConverter(str)
{
    str = str.replace("&laquo;","«" );
    str = str.replace("&raquo;", "»");

    return str;

}

export default textConverter