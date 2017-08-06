<template>
  <div class='scrum'>
      <h1>{{titulo}}</h1>
    <div class="row col-md-5 col-centered  marco">
        
        <items-lista-scrum></items-lista-scrum>
            
    </div>

  </div>
</template>
<script>
import ItemsListaScrum from '@/components/ItemsListaScrum'
export default{
    name: 'scrull',
    components:{
        ItemsListaScrum
    },
    data () {
        return{
            titulo:'Lista de Tareas, jugando con Vue js',
        }
    },
    methods: {
       
    }
}
    
</script>
<style scoped>

.marco{
    margin: 0 auto;
    float:none;
    border: solid 1px grey;
    border-radius: 5px;
}

</style>
