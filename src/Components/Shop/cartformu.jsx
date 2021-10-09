import React from 'react'
import { Link } from 'react-router-dom'

export default function Cartformu() {
    return (
        <div>
            <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
    </div>
    <div class="form-group col-md-6">
      <label for="inputPhone4">Teléfono</label>
      <input type="phone" class="form-control" id="inputPhone4" placeholder="Teléfono" />
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Dirección</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>

  <button type="submit" class="btn btn-primary">Comprar</button> <Link to="/"><button type="submit" class="btn btn-primary">Volver</button> </Link>
</form>
        </div>
    )
}
