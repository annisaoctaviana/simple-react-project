export const Table = ({data}) => {  
    return (
       
        <table class="table">
            <thead>
                <tr>
                <th scope="col">No</th>
                <th scope="col">Nama</th>
                <th scope="col">Posisi</th>
                <th scope="col">Departemen</th>
                </tr>
            </thead>
            <tbody>
                {
                data.map((users, index)=>(
                        <tr key = {index}>
                        <th>{index+1}</th>
                        <td>{users.nama}</td>
                        <td>{users.Posisi}</td>
                        <td>{users.Departemen}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}