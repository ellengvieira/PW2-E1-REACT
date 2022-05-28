
const MenuAdmin = () => {

  const isAuth = !!(localStorage.getItem("usuario") && localStorage.getItem("senha"));
  return (
    <div className="container">
    <header className="d-flex justify-content-center py-3">
      <ul className="nav nav-pills">
        <li className="nav-item"><a href="/" className="nav-link" aria-current="page">Home</a></li>
        <li className="nav-item"><a href="/equipamentos" className="nav-link">Equipamentos</a></li>
        <li className="nav-item"><a href="/manutencoes" className="nav-link">Manuntenções</a></li>
        <li className="nav-item"><a href="/login" className="nav-link">Login/Logout</a></li>
      </ul>
    </header>
  </div>
  )
}
export default MenuAdmin;
