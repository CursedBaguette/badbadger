import React from 'react'


export default function Cartformu() {
    return (
        <div  className="formcenter formulario12">
            <form >
  <div className="form-row ">
    <div className="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" className="form-control inputForm1" id="inputEmail4" placeholder="Email" />
    </div>
    <div class="form-group col-md-6">
      <label for="inputPhone4">Teléfono</label>
      <input type="phone" className="form-control inputForm1" id="inputPhone4" placeholder="Teléfono" />
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Dirección</label>
    <input type="text" className="form-control inputForm1" id="inputAddress" placeholder="1234 Main St" />
  </div>

  <button type="submit" className="btn btn-dark btn-dark2">Comprar</button> 
</form>
        </div>
    )
}
