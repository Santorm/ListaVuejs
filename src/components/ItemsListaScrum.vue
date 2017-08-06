<template>
    <div>
        <div>
            <input v-model="nuevaTarea" class='marco input_new_task' type='text' placeholder='Nueva tarea..'>
            <button @click="addTask" class="btn btn-primary">Añadir tarea</button>
        </div>
        <ul class='list'>    
            <li  v-for="(task, index) in tareas" >
               <div id='task' v-show="!task.editable" :class="{'pendiente': !task.pendiente, 'realizada': task.pendiente }">
                   {{task.tarea}}
               </div> 
               <!-- glyphicon glyphicon-ok -->
                <div id='task'  v-show="task.editable">
                   <input id='input_list'  v-model="task.tarea" ref="inputediting" type='text' >
                   <!-- <span @click="editing(index)" class="icon glyphicon glyphicon-pencil"></span> -->
                  
                </div> 
                <span @click="editing(index)" class="icon glyphicon" :class="{'glyphicon-pencil': !task.editable, 'glyphicon-ok': task.editable }"></span>
                <span @click="checking(index)" class="icon glyphicon" :class="{'glyphicon-unchecked': !task.pendiente, 'glyphicon-check': task.pendiente }"></span>
            </li>

            <pre>{{$data}}</pre>  
           
            
        </ul>
    </div>        
</template>
<script>
import Vue from 'vue'; 
export default{
    name: 'itemslistascrum',
    props:[
    ],
    data () {
        return{
            nuevaTarea : '',
            tasking : '',
            tareas : [
                {
                    tarea: 'Aprender Vue js',
                    pendiente: false,
                    editable:false
                    },
                {
                    tarea: 'Manejar el CLI de Vue js',
                    pendiente: true,
                    editable:false
                    },
                {
                    tarea: 'Realizar con exito este SCRUM',
                    pendiente: false,
                    editable:false
                    },
                { 
                    tarea: 'Hacer la comida',
                    pendiente: true,
                    editable:false
                    }
                
            ]
        }
    },
    methods:{
        alert: function(){
            alert('funciona');
        },
        editing: function(index){
           
           //evitar que se activen todos los inputs a la vez
        //    var i='';
            if(this.tareas[index].editable == true){
                this.tareas[index].editable     = false;
            }else{       
        
                    for(var i=0 ; i<this.tareas.length; i++){
                           this.tareas[i].editable= false;

                    }

                    this.tareas[index].editable =!this.tareas[index].editable;
                    Vue.nextTick(() => {
                    this.$refs.inputediting[index].focus();
                    })
            }
        },
        checking: function(index){
           
           //evitar que se activen todos los inputs a la vez
        //    var i='';
            // if(this.tareas[index].pendiente == true){
            //     this.tareas[index].pendiente     = false;
            // }else{       
        
            //         for(var i=0 ; i<this.tareas.length; i++){
            //                this.tareas[i].pendiente= false;

            //         }

                    this.tareas[index].pendiente =!this.tareas[index].pendiente;
                    // return this.tareas[index].pendiente;
                    // Vue.nextTick(() => {
                    // this.$refs.inputediting[index].focus();
                    // })
            // }
        },
         focus: function(index){
            console.log(index);
                     
        },
         addTask: function(){
            this.tareas.push({
                tarea: this.nuevaTarea, 
                pendiente: true,
                editable:false 
                });
            this.nuevaTarea='';
        }

    },
    computed: {
        iconsChange: function(){
            return {
                'glyphicon-ok' : false,
                'glyphicon-pencil' : true

            }
        }
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
.input_new_task{
    width: 62%;
    height: 50px;
    font-size: 19px;
    margin: 20px 20px 10px;
    padding: 0 30px;
   
}

.icon{
    cursor: pointer;
    float: right;
    color:grey;
    padding: 0px 5px;
}

.icon:hover{
    cursor: pointer;
    float: right;
    color:dodgerblue;
}
#task{
    display: inline-block;
    width: 80%;
}

li{
    list-style: none;
    padding: 5px;
    margin: 3px;
    border: 1px solid grey;
    border-radius: 5px;
    text-align: left;
}

.list{
    padding: 20px;
}

#input_list{
     width: 90%;
    
}
.pendiente{
    color: #000;
}

.realizada{
    color: grey;
    text-decoration: line-through;
}

</style>
