
const Item = ({ id, note, date, time, deleteData, sumbittingStatus }) => {

    function removeHandler() {
        sumbittingStatus.current = true
        deleteData(function (prev) {

            return prev.filter(i => i.id !== id)
        })
    }

    return <div className="item">
        <div>
            <p>{note}</p>
            <p>{`${date} ${time}`}</p>
        </div>
        <button onClick={removeHandler} className="remove">刪除</button>
    </div>
}
export default Item