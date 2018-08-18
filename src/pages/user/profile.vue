<template>
        <q-page padding>
            <h4>Perfil</h4>
            <form @submit.prevent="onPerfil"> 
                <q-field
                    name="nome"
                    id="nome"
                    icon="person"
                    label="Nome:">
                  <q-input
                    type="text"
                    v-model="nome"
                  />
                </q-field><br><br>
               
                <q-field
                    icon="account_circle"
                    label="Foto perfil"
                >
                <img :src="imageUrl" height="150"><br> 
                <q-btn outline color="primary" label="Upload" @click="onPickFile"></q-btn>
                <input type="file" 
                       style="display: none" 
                       ref="fileInput" 
                       accept="image/*"
                       @change="onFilePicked"
                ></input>
                </q-field><br>
                <div class="z-top">
                        <q-btn
                               class="btnSair"
                               color="red"
                               to="/index"
                               outline
                               label="Cancelar"
                        />
                        <q-btn color="green" 
                               type="submit" 
                               outline
                               :disabled="loading" 
                               :loading="loading" 
                               class="justify-center btnSalvar"
                               label="Enviar">
                            <span slot="loader" class="custom-loader">
                                <q-icon name="cached"/>
                            </span>
                        </q-btn>
                </div>
            </form>
        </q-page>
    </template>
    
    <script>
    import {usuariosRef} from '../../components/helpers/firebase/firebaseconfig.js'
    import * as firebase from 'firebase'
    
    export default {
        data () {
            return {
                listaUsuarios: this.$store.getters.listaUsuarios,
                image: null,
                imageUrl: '../../assets/perfil.png',
                uid: this.$store.getters.user.uid,
                nome: ''
            }
        },
        created () {
            this.$store.dispatch('carregarUsuario') 
        },
        destroyed() {
            this.$store.dispatch('setarUsuarios') 
        },
        methods: {
            onPerfil () {  
                if (!this.image) {
                    return
                }
                var userData = {
                    email: this.user.email,
                    uid: this.user.uid, 
                    nome: this.nome,
                    imageUrl: this.imageUrl, 
                    label: this.nome,
                    sublabel: this.user.email, 
                    value: this.user.uid,
                    inscrito: false,
                    pago: false,
                    voto: 0,
                    participouSD: false,
                    participouS: false,
                    participouND: false,
                    participouN: false,
                    participouC: false 
                    }
                var updates = {}    
                var uid = this.user.uid
                updates['/usuarios/' + uid + '/user'] = userData
                
                return firebase.database().ref().update(updates)
                .then(uid => {
                    var uid = this.user.uid
                    const filename = this.image.name
                    const ext = filename.slice(filename.lastIndexOf('.'))
                    firebase.storage().ref('user/' + uid + ext).put(this.image)
                .then(function(snapshot) {
                    console.log('Uploaded', snapshot.totalBytes, 'bytes.');
                    snapshot.ref.getDownloadURL().then(function(url) {
                        console.log('File available at', url);
                        firebase.database().ref('/usuarios/' + uid + '/user').update({imageUrl: url, image: url})  
                    })
                    })
                    .catch(function(error) {
                    // [START onfailure]
                    console.error('Upload failed:', error);
                    // [END onfailure]
                })
                this.$router.push('/index')
                })
            },
            onDismissed () {
                this.$store.dispatch('clearError')
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
            }
        },
        computed: {
            loading () {
                return this.$store.getters.loading
            },
            error () {
                return this.$store.getters.error
            },
            usuario () {
                return this.$store.getters.usuario
           },
            user() {
                return this.$store.getters.user      
            }
        }
    }
    </script>