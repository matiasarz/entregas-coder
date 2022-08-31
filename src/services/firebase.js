// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, collection } from 'firebase/firestore';
import { useState, useEffect } from 'react';

const firebaseConfig = {
    apiKey: 'AIzaSyAx7_6pKlq5CX_hOInpw_EwLr8PfvZKFGI',
    authDomain: 'react-eccomerce-b170c.firebaseapp.com',
    projectId: 'react-eccomerce-b170c',
    storageBucket: 'react-eccomerce-b170c.appspot.com',
    messagingSenderId: '22677576642',
    appId: '1:22677576642:web:37b8ddf1f976213650945b',
    measurementId: 'G-D89S58XSEC',
};

const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);
// import { getAnalytics } from 'firebase/analytics';
// const analytics = getAnalytics(app);

export const useGetDataFromFirestoreDB = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const productCollection = collection(firestoreDB, 'product');
        const docsSnapshot = getDocs(productCollection);
        setLoading(true);
        docsSnapshot
            .then((response) => {
                const docsData = response.docs.map((item) => ({
                    ...item.data(),
                    id: item.id,
                }));
                setData(docsData);
            })
            .finally(() => setLoading(false));
    }, []);

    return { data, loading };
};

export const useGetCategoryFromFirestoreDB = (filter) => {
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const productCollection = collection(firestoreDB, 'product');
        const docsSnapshot = getDocs(productCollection);
        setLoading(true);
        docsSnapshot
            .then((response) => {
                const docsData = response.docs
                    .map((item) => ({ ...item.data(), id: item.id }))
                    .filter((item) => item.category === filter);
                setCategory(docsData);
            })
            .finally(() => setLoading(false));
    }, [filter]);

    return { category, loading };
};

export default firestoreDB;
