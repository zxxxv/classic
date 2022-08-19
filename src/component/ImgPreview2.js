function ImgPreview2() {

    return (
        <div>
            <input type='file'
                accept='image/jpg,impge/png,image/jpeg,image/gif'
                name='profile_img'
                onChange={this.handleFileOnChange}>
            </input>
        </div>
    )
}

export default ImgPreview2;

