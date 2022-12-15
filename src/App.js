import './App.css';
import {useState} from "react";

const initialData = {
    name: '',
    surname: '',
    salary: ''
}

function App() {
    const [form, setForm] = useState(initialData)
    const [users, setUsers] = useState([]);
    const [editableUserData, setEditableUserData] = useState({
        isEdit: false,
        index: null
    })
    console.log(users);
    const isNotFieldEmpty = form.name && form.surname && form.salary

    const handleChangeForm = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    const handleSubmitUser = (e) => {
        e.preventDefault();
        if (!isNotFieldEmpty) return
        if (form?.index) {
            users.map((user,index) => index === form?.index)
        } else {
            setUsers((prev) => [...prev, form]);
        }
        setForm(initialData);
    }
    const handleEdit = (element, index) => () => {
        setForm({...element, index})
    }
    const handleRemove = () => {

    }

    return (
        <div>
            <table>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Salary</th>
                    <th>Action</th>
                </tr>
                <tbody>
                {users.map((user, index) => (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.surname}</td>
                        <td>{user.salary}</td>
                        <td>
                            <button onClick={handleEdit(user, index)}>edit</button>
                            <button>remove</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div>
                <form onSubmit={handleSubmitUser}>
                    <input value={form.name} name={"name"} onChange={handleChangeForm}/>
                    <input value={form.surname} name={"surname"} onChange={handleChangeForm}/>
                    <input value={form.salary} name={"salary"} onChange={handleChangeForm}/>
                    <div>
                        <button type={'submit'}>Add</button>
                        <button type={"reset"}>Cancel</button>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default App;
