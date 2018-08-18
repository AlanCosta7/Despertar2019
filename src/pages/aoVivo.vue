<template>
    <q-page>
        <q-scroll-area id="scroll" style="width: 100%">
            <q-list class="flex-center items-start timeline">
                <q-item v-for='item in listaTimeLine' :key='item.id'  > 
                  <div class="row postint shadow-1">
                    <div class="row" >
                        <img :src=item.avatar alt="" class="imagemPerfil">
                        <p class="nome">{{item.nome}}</p>
                    </div>
                    <p class="data">{{item.data}}</p>
                    <div class="post">
                        <img :src=item.imageUrl class="postImagem" alt=""><br>
                        <p class="texto">{{item.texto}}</p>
                    </div>
                  </div>
                </q-item>
            </q-list>   
        </q-scroll-area>             
        <q-inner-loading :visible="loading">
                <q-spinner-comment size="100px" color="orange"></q-spinner-comment>
                <h4 class="text-orange carregando">Aguarde! Carregando as últimas informações do DESPERTAR 2019.</h4>
            </q-inner-loading>
        <div class="absolute-bottom editar">
            <form @submit.prevent="onAoVivo" v-if="youequipe"> 
                 <input type="file"  
                        style="display: none" 
                        ref="fileInput" 
                        accept="image/*"
                        @change="onFilePicked"
                 ></input>
                 <img :src="imageUrl" height="100px" class="image"> 
                  <div class="input row" inverted>
                    <q-btn class="col-2" 
                            icon="photo_camera" 
                            color="primary" 
                            :disabled="loading" 
                            :loading="loading" 
                            @click="onPickFile">
                            <span slot="loader" class="custom-loader">
                                <q-icon name="cached"/>
                            </span>
                    </q-btn>
                    <q-input
                        inverted
                        class="col-8"
                        type="textarea"
                        v-model="texto"
                    />
                    <q-btn color="green" 
                        type="submit" 
                        icon="send"
                        :disabled="loading" 
                        :loading="loading" 
                        class="justify-center btnSalvar col-2">
                    <span slot="loader" class="custom-loader">
                        <q-icon name="cached"/>
                    </span>
                    </q-btn>
                </div>
            </form>        
            <div class="row btns">
                <q-btn color="primary" @click="dashboard()" outline icon="dashboard" class="btn col"></q-btn>
                <q-btn color="primary" @click="aovivo()" outline class="btn col-6">ao vivo<q-spinner-rings color="red" :size="30" /></q-btn>
                <q-btn color="primary" @click="chat()" outline icon="forum" class="btn col"></q-btn>
            </div>
        </div>
    </q-page>
</template>

<script>
import * as firebase from 'firebase'
import moment from 'moment'

export default {
  name: 'PageIndex',
        data () {
            return {
                texto: '',
                image: null,
                imageUrl: '',
            }
        },
        mounted() {
          this.$store.dispatch('carregarUsuario') 
          this.$store.dispatch('carregaTimeLine') 
          this.$store.dispatch('carregaChat') 
          this.$store.dispatch('carregaListaUsuario') 

        var width = window.innerWidth;
        var height = window.innerHeight;  
        
        document.getElementById('scroll').style.height = height - 135 + 'px'
        },
        computed: {
            youequipe () {
                var lista = this.$store.getters.listaEquipe
                var uid = this.user.uid
                for (var i = 0; i < lista.length; i++) {
                    if (uid == lista[i]) {
                    return true
                    }
                }
            },
            loading () {
                return this.$store.getters.loading
            },
            error () {
                return this.$store.getters.error
            },
            usuario () {
                return this.$store.getters.usuario
           },
           listaTimeLine () {
            return this.$store.getters.listaTimeLine
           },
            user() {
                return this.$store.getters.user      
            }
        },
        methods: {
          messageDate (item) {
            return moment(item.createdAt).format('DD/MM, hh:mm:ss')
          },  
          aovivo() {
            this.$router.push('/aovivo')
          },
          dashboard() {
            this.$router.push('/index')
          },
          chat() {
            this.$router.push('/chat')
          },
          onPickFile () {
                this.$refs.fileInput.click()
          },
          onFilePicked (event) {
            const files = event.target.files
            let filename = files[0].name
            if (filename.lastIndexOf('.') <= 0) {
              return alert('Adicione uma imagem válida!')
            }
            const fileReader = new FileReader()
            fileReader.addEventListener('load', () => {
              this.imageUrl = fileReader.result
            })
            fileReader.readAsDataURL(files[0])
              this.image = files[0]
          },
          onAoVivo (item) { 
                var user = this.user
                var uid = user.uid
                var postData = {
                    texto: this.texto,
                    data: this.messageDate(item),
                    image: this.image,
                    imageUrl: this.imageUrl,
                    avatar: this.usuario.imageUrl,
                    email: this.user.email,
                    uid: this.user.uid, 
                    nome: this.usuario.nome,
                    }

                var newPostKey = firebase.database().ref().child('posts').push().key
                var updates = {}    
                updates['/posts/' + newPostKey] = postData
                
                let imageUrl
                var key = newPostKey
                return firebase.database().ref().update(updates)
                .then(     
                        this.texto = ""
                    )
                .then((data) => {
                    const key = newPostKey
                    return key
                })
                .then(key => {
                        const filename = this.image.name
                        const ext = filename.slice(filename.lastIndexOf('.'))
                        firebase.storage().ref('posts/' + key + ext).put(this.image)  
                    .then(function(snapshot) {
                        console.log('Uploaded', snapshot.totalBytes, 'bytes.');
                        snapshot.ref.getDownloadURL().then(function(url) {
                        console.log('File available at', url)
                        firebase.database().ref('posts').child(key).update({imageUrl: url, uidposts: newPostKey})  
                        })
                    })
                    .then(     
                        this.clearForm() 
                    )
                    .catch(function(error) {
                        // [START onfailure]
                        console.error('Upload failed:', error);
                        // [END onfailure]
                    });
                })
                .catch((error) => {
                    console.log(error)
                })
            },
            clearForm () {
                this.image = null,
                this.imageUrl = null
            },
            onDismissed () {
                this.$store.dispatch('clearError')
            }, 
        }

}    
</script>

<style>
  .input {
    width: 100%;
    position: absolute;
    bottom: 42px;
  }  
  .btn {
    width: 100%;
  }
  .btns {
    width: 100%;
    position: absolute;
    bottom: 0
  }
  .image {
    width: 100%;
    height: auto;  
    position: absolute;
    display:flex;
    bottom: 80px;
  }
  .imagemPerfil {
    object-fit: cover;
    border-radius: 100%;
    width: 35px;
    height: 35px;
  }
  .nome {
    padding-left: 10%;
    font-size: 0.75em;
    font-weight: bold
  }
  .data {
    color: rgb(195, 191, 191);
    font-size: 0.6em;     
  }
  .postImagem {
    width: 100%; 
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;

  }
  .post {
    background-color: #E1E9F8;  
    border-radius: 15px;
    width: 100%;
  }
  .postint {
    width: 100%;  
    padding: 3%
  }
  .texto {
    padding: 5%;
    width: 100%;
  }
  .editar {
    background: white  
  }
  .carregando {
    padding: 10%;
    text-align: center;  
  }
</style>