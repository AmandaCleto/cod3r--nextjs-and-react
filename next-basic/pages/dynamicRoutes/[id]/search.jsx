// Using [] within the folder's name [id], make this folder's name dynamic inside the url, for example:
// http://localhost:3000/dynamicRoutes/123/search
// /123/ is the dynamic id, id is the folder's name
// It can be anything, a text, a number...

import { useRouter } from "next/router";
// To have access of the dynamic id you have to get it from next/router

export default function search() {
    const router = useRouter();
    const dynamicId = router.query.id;

    console.log(router);
    return (
        <div>
            <h1>Rotas | Id | Buscar </h1>
            <h1>Rotas | {dynamicId} | Buscar </h1>
        </div>
    );
}
