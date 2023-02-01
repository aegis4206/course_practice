import Item from "./Item"


const List = ({ listData, deleteData, sumbittingStatus }) => {
    return <div className="list">
        {
            listData.map(item => {
                const { id, note, date, time } = item
                return <Item key={id} id={id} note={note} date={date} time={time} deleteData={deleteData} sumbittingStatus={sumbittingStatus} />
            })
        }
    </div>
}
export default List