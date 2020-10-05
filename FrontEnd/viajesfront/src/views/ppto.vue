<template>
  <v-app>
    <v-container fluid>
      <h1>Presupueste su Viaje gratis</h1>
      <v-row>
        <v-col cols="6">
          <v-select
            v-model="tipoViaje"
            label="Tipo de Viaje"
            :items="this.tipoViajes"
          ></v-select>
          <v-row justify="center">
            <v-col cols="3">
              <v-date-picker v-model="picker1"></v-date-picker>
            </v-col>

            <v-col cols="3">
              <v-date-picker
                v-if="tipoViaje === 'Redondo'"
                v-model="picker2"
              ></v-date-picker>
            </v-col>
          </v-row>

          <v-select
            v-model="ruta"
            label="Rutas"
            :items="this.rutas"
            item-text="nombre"
            return-object
          ></v-select>

          <v-select
            v-model="transporte"
            label="Transporte"
            :items="this.transportes"
            item-text="tipo"
            return-object
          ></v-select>         
        </v-col>
        <v-col cols="6">
            <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
            <h1>Resumen</h1>            
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tipo de viaje:</td>
          <td>{{ tipoViaje }}</td>
        </tr>
        <tr>
          <td>Fecha de ida</td>
          <td>{{ picker1 }}</td>
        </tr>
        <tr >
          <td>Fecha de Regreso</td>
          <td>{{ picker2 }}</td>
        </tr>
        <tr>
          <td>Ruta</td>
          <td>{{ ruta.nombre }}</td>
        </tr>
        <tr>
          <td>Costo por peaje</td>
          <td>{{ costoPeaje }}</td>
        </tr>
        <tr>
          <td>Costo por combustible</td>
          <td>{{ costoCombustible }}</td>
        </tr>
        <tr>
          <td>Costo por viaticos</td>
          <td>{{ costoViaticos }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "ppto",
  data() {
    return {
        rutaObj: {},
      transporte: {},
      ubicaciones: [],
      casetas: [],
      salarioMinimo: 85,
      ruta: {},
      costoViaticos: 0,
      costoCombustible: 0,
      costoPeaje: 0,
      picker1: new Date().toISOString().substr(0, 10),
      picker2: new Date().toISOString().substr(0, 10),
      transportes: [],
      rutas: [],
      tipoViaje: "",
      tipoViajes: ["Sencillo", "Redondo"],
    };
  },

  mounted() {
    //Cargamos las rutas
    fetch("http://192.168.2.15:4000/api/rutas/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((rutas) => {
        console.log(rutas);
        this.rutas = rutas;
      })
      .catch((err) => {
        return err;
      });
    //Cargamos los transportes
    fetch("http://192.168.2.15:4000/api/unidadtransportes/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((transportes) => {
        console.log(transportes);
        this.transportes = transportes;
    
      })
      .catch((err) => {
        
        return err;
      });
  },

  watch: {
      ruta(){
          this.costoViaticos = 6*this.salarioMinimo;
          //Cargamos los los combustibles
    fetch("http://192.168.2.15:4000/api/combustibles/"+this.transporte.tipoCombustible, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((combustible) => {
        console.log(combustible);
        this.combustible = combustible;        
        this.costoCombustible = Math.round((this.ruta.distancia/3)*this.combustible.precio) ;
          
        
      })
      .catch((err) => {
        
        return err;
      })

      //Cargamos las ubicaciones
    fetch("http://192.168.2.15:4000/api/ubicacion_Rutas/"+this.ruta.idRuta, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((ubicaciones) => {
        console.log(transportes);
        this.ubicaciones = ubicaciones;
     
      })
      .catch((err) => {
        
        return err;
      });
          
      },
      transporte(){
          //Cargamos los los combustibles
    fetch("http://192.168.2.15:4000/api/combustibles/"+this.transporte.tipoCombustible, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((combustible) => {
        console.log(combustible);
        this.combustible = combustible;        
        this.costoCombustible = Math.round((this.ruta.distancia/3)*this.combustible.precio) ;
          
        
      })
      .catch((err) => {
    
        return err;
      })
          
      }
  },
};
</script>

<style scoped>
#secure {
  background-color: #ffffff;
  border: 1px solid #cccccc;
  padding: 20px;
  margin-top: 10px;
}
</style>
