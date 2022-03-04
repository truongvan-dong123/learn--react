import "./style.css"

function List() {
    return (
        <div className="Header">
            <div className="header_top">
                <h3>TO DO LIST APPLICATION</h3>
                <input type="text">
                </input>
            </div>

            <div className="List">
                <div className="List_title">
                    Dùng create-react-app tạo app
                </div>
                <div className="List_button">
                    <button className="button__V">V</button>
                    <button className="button__X">X</button>
                </div>
            </div>

            
        </div>
    );
}

export default List;