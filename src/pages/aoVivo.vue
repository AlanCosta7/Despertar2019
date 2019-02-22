<template>
    <q-page>
        <q-scroll-area id="scroll" style="width: 100%">
            <q-list class="flex flex-center items-start timeline column">
                <q-item class="qitempost column shadow-1" v-for='item in posts' :key='item.id'>
                    <div class="row postint" link @click.native="lerposte(item)">
                        <div class="column">
                            <p class="titulo">{{item.titulopost}}</p>
                            <p class="nome">Autor: {{item.autorpost}}</p>
                        </div>
                        <div class="post">
                            <img :src=item.imageUrl alt="imagem do post" class="imagemPost">
                        </div>
                    </div>
                    <div class="column btn items-start">
                        <div class="row">
                            <!-- <q-btn icon="favorite" flat :color=favorito @click="amei(item)"></q-btn> -->
                            <!-- <p class="text-black">{{count}}</p> -->
                        </div>
                            <p class="data">{{item.data}}</p>
                        </div>
                </q-item>
            </q-list>
        </q-scroll-area>
        <q-btn round v-if="admin" color="secondary" @click="editar = true" class="fixed" icon="add" style="right: 18px; bottom: 50px" />

        <q-modal v-model="editar" maximized v-if="admin">
            <form @submit.prevent="onAoVivo" class="q-pa-md">
                <q-field helper="Título do post">
                    <q-input class="col-8" type="text" float-label="Título" v-model="titulopost" />
                </q-field>

                <q-field helper="Autor do post">
                    <q-input class="col-8" type="text" float-label="Autor" v-model="autorpost" />
                </q-field>
                <input type="file" style="display: none" ref="fileInput" accept="image/*" @change="onFilePicked"></input>
                <img :src="imageUrl" class="image">

                <q-btn class="col-2" icon="photo_camera" color="primary" :disabled="loading" :loading="loading" @click="onPickFile">
                    <span slot="loader" class="custom-loader">
                        <q-icon name="cached" />
                    </span>
                </q-btn>
                <q-editor class="q-mt-xl" min-height="500px" v-model="postprincipal" toolbar-text-color="white" toolbar-toggle-color="yellow-8"
                    toolbar-flat toolbar-bg="primary" :toolbar="[
                        ['bold', 'italic', 'underline'],
                        [{
                        label: $q.i18n.editor.formatting,
                        icon: $q.icon.editor.formatting,
                        list: 'no-icons',
                        options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code']
                        }]
                    ]" />

                <q-btn color="green" type="submit" label="Enviar" :disabled="loading" :loading="loading" class="justify-center q-my-lg">
                    <span slot="loader" class="custom-loader">
                        <q-icon name="cached" />
                    </span>
                </q-btn>
            </form>
        </q-modal>

        <q-modal v-model="lerpost" >
            <q-modal-layout class="q-ma-md">
                <q-btn label="Fechar" color="negative" @click="lerpost = false"></q-btn>
                <h3 class="titulo">{{editedItem.titulopost}}</h3>
                <div class="row">
                <div class="post col-lg-5 col-sm-12">
                    <img :src=editedItem.imageUrl alt="imagem do post" class="imagemPostmodal">
                </div>
                <div v-html=editedItem.postprincipal class="col-lg-6 col-sm-12"></div>
                </div>
                <h5 class="q-my-xl">Autor: {{editedItem.autorpost}}</h5>
            </q-modal-layout>
        </q-modal>

    </q-page>
</template>

<script>
    import * as firebase from 'firebase'
    import moment from 'moment'
    import { mapGetters } from 'vuex'
    import { Loading, QSpinnerFacebook } from 'quasar'

    import Vuex from 'vuex'

    export default {
        name: 'PageIndex',
        data() {
            return {
                editedIndex: -1,
                editedItem: '',
                lerpost: false,
                editar: false,
                titulopost: '',
                autorpost: '',
                postprincipal: '',
                image: null,
                imageUrl: '',
            }
        },
        mounted() {
            this.$store.dispatch('customLoading')
            var width = window.innerWidth;
            var height = window.innerHeight;
            let loading = this.loading
            document.getElementById('scroll').style.height = height - 80 + 'px'

            if (!loading) {
                Loading.hide()

            }
        },
        computed: {
            ...Vuex.mapGetters({
                loading: 'loading',
                error: 'error',
                currentUser: 'currentUser',
                posts: 'listaTimeLine'
            }),
            lista() {
                var lista = []
                return lista
            },
            admin() {
               return this.currentUser.email === "alanpc7@gmail.com"
            },
        },
        methods: {
            amei(item) {
              var uid = item.uidposts  
              var user = this.currentUser.email
              var key = this.currentUser.uid
              console.log(key)

              return firebase.database().ref().child('posts/' + uid + '/favorito/' + key).update({user: user, amei: 'red'})
            },
            lerposte(value) {
                this.editedIndex = this.posts.indexOf(value)
                this.editedItem = Object.assign({}, value)
                this.lerpost = true
            },
            messageDate(item) {
                return moment(item.createdAt).format('DD/MM, hh:mm:ss')
            },
            onPickFile() {
                this.$refs.fileInput.click()
            },
            onFilePicked(event) {
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
            onAoVivo(item) {
                var postData = {
                    titulopost: this.titulopost,
                    autorpost: this.autorpost,
                    postprincipal: this.postprincipal,
                    data: this.messageDate(item),
                    image: this.image,
                    imageUrl: this.imageUrl,
                }

                var newPostKey = firebase.database().ref().child('posts').push().key
                var updates = {}
                updates['/posts/' + newPostKey] = postData

                let imageUrl
                var key = newPostKey
                return firebase.database().ref().update(updates)
                    .then((data) => {
                        const key = newPostKey
                        return key
                    })
                    .then(key => {
                        const filename = this.image.name
                        const ext = filename.slice(filename.lastIndexOf('.'))
                        firebase.storage().ref('posts/' + key + ext).put(this.image)
                            .then(function (snapshot) {
                                console.log('Uploaded', snapshot.totalBytes, 'bytes.');
                                snapshot.ref.getDownloadURL().then(function (url) {
                                    console.log('File available at', url)
                                    firebase.database().ref('posts').child(key).update({ imageUrl: url, uidposts: newPostKey })
                                })
                            })
                            .then(
                                this.clearForm()

                            )
                            .catch(function (error) {
                                // [START onfailure]
                                console.error('Upload failed:', error);
                                // [END onfailure]
                            });
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            },
            clearForm() {
                this.image = null,
                    this.imageUrl = null,
                    this.postprincipal = null,
                    this.titulopost = null,
                    this.autorpost = null,
                    this.editar = false
            },
            onDismissed() {
                this.$store.dispatch('clearError')
            },
        }

    }    
</script>

<style>
    .input {
        width: 100%;
        position: absolute;
        bottom: 0px;
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
        width: 250px;
        height: 250px;
        display: flex;
        object-fit: cover
    }

    .imageUrl {
        object-fit: cover;
        width: 100%;
        height: 250px;
    }

    .nome {
        padding: 0;
        margin: 0;
        padding-left: 20px;
        font-size: 1em;
        font-weight: 500
    }

    .titulo {
        margin: 0;
        font-size: 1.5em;
        padding: 20px;
        color: #c88b48;
        font-weight: bold
    }

    .data {
        margin: 0;
        padding: 0;
        padding-left: 20px;
        color: #aaa;
        font-size: 0.6em;
    }

    .imagemPost {
        object-fit: cover;
        width: 100%;
    }
    .imagemPostmodal {
        object-fit: cover;
        width: 100%;
        max-width: 500px;
        height: 300px; 
    }
    .post {
        width: 100%;
    }

    .postint {
        max-width: 400px;
        width: 100%
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
    .qitempost {
        margin: 0;
        padding: 0;
        padding-top: 20px
    }
</style>