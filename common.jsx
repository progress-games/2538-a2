function createHeader(pageTitle, nextPage) {
    var font = (
        <>
            <select name="paragraph-font" id="paragraph-font">
                <option value="vcr">Default VCR font</option>
                <option value="arial">Arial</option>
            </select>
        </>
    )

    return (
        <>
            <nav>
                <h4><a href="index.html" class="title">home</a></h4>
                <h4 class='title'>{pageTitle}</h4>
                <h4><a href={nextPage + ".html"} class="title">next page</a></h4>
            </nav>
            {font}
        </>)
}