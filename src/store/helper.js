import { $firestore } from '../plugins/firebase'
import { get } from 'lodash-es'

/**
 * Retorna o ID do usuário (uid) e o ID do projeto (pid) atual (se existente)
 */
export function getCommonsIds({ rootState }) {
  let uid = get(rootState, 'user.currentUser.uid')
  let pid = get(rootState, 'projects.currentProject.id')
  return { uid, pid }
}

export function mapQuerySnapshot(querySnapshot) {
  return querySnapshot.docs.map(doc => {
    return {
      id: doc.id,
      data: doc.data()
    }
  })
}

export function mapDocumentSnapshot(docSnapshot) {
  if (!docSnapshot.exists) {
    console.warn('projeto não encontrado:', pid)
    return null
  }
  return {
    id: docSnapshot.id,
    data: docSnapshot.data()
  }
}

export async function loadDocs(pid, collectionName) {
  const projectRef = $firestore.collection('projects').doc(pid)
  const docsRef = projectRef.collection(collectionName)
  const docs = await docsRef.get().then(mapQuerySnapshot)
  return docs
}

export async function watchDocs(pid, collectionName, callback) {
  const currentProjectRef = $firestore.collection('projects').doc(pid)
  const docsRef = currentProjectRef.collection(collectionName)

  const unsubscribe = docsRef.onSnapshot(querySnapshot => {
    const docs = mapQuerySnapshot(querySnapshot)
    callback(docs)
  })
  return unsubscribe
}

export async function addDoc(pid, collectionName, docData) {
  const currentProjectRef = $firestore.collection('projects').doc(pid)
  const docRef = await currentProjectRef.collection(collectionName).add(docData)
  console.info('Doc adicionado:', docRef)
  return docRef
}

export async function removeDoc(pid, collectionName, docId) {
  const currentProjectRef = $firestore.collection('projects').doc(pid)
  await currentProjectRef
    .collection(collectionName)
    .doc(docId)
    .delete()
  console.info('Doc removido:', docId)
}

export async function updateDoc(pid, collectionName, docId, docData) {
  const currentProjectRef = $firestore.collection('projects').doc(pid)
  const documentRef = currentProjectRef.collection(collectionName).doc(docId)
  await documentRef.update(docData)
  console.info('Doc atualizado:', docId)
}
