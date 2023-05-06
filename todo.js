function Todo({todo,index,remove}){
    function handle(){
        remove(index);
    }
    return
    <div className="todo" onClick={FileSystemFileHandle}> 
    {todo.text} (-)</div>
}
