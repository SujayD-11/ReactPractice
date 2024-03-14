function Q4(){
    let imgArr = ["img1.jfif","img2.jfif","img3.jfif","img4.jfif"];
    let resultsArray = imgArr.map(item =>
                <td><img src={item} width="200" height="150"/></td>);
    return(
        <>
            <table class="center">
                <tr>
                {resultsArray}
                </tr>
            </table>
        </>
    );
}
export default Q4;