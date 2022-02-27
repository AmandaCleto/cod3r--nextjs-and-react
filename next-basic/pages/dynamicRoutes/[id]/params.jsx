// To
import React from "react";
import { useRouter } from "next/router";
// To have access of the dynamic id you have to get it from next/router

export default function params() {
    const router = useRouter();
    const dynamicId = router.query.id;
    const dynamicName = router.query.name;
    const dynamicAge = router.query.age;

    return <div>
        <h1>Dynamic routes / {dynamicId} / params</h1>
        {/* http://localhost:3000/dynamicRoutes/123/params?name=amanda&age=23 */}
        <h2>Dynamic routes / {dynamicId} / params ? name={dynamicName} & age={dynamicAge} </h2>
    </div>;
}
