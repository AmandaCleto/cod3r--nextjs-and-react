import React from "react";

import Link from "next/link";

import router from "next/router";
export default function routes() {

    function simpleNavigation(url) {
        router.push(url);
    }

    function navigationWithParams(url) {
        router.push({
            pathname: '/dynamicRoutes/teste/params',
            query: {
                name: 'Harry',
                age: '21',
            }
        });
    }

    return (
        <div>
            <h1>rotas index</h1>
            <ul>
                <Link href={"/dynamicRoutes/teste/params?name=Harry&age=21"} passHref>
                    <li>Params</li>
                </Link>
            </ul>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                }}
            >
                <button
                    onClick={() => simpleNavigation("/dynamicRoutes/123/search")}
                >
                   Navegação simples para Buscar
                </button>
                <button
                    onClick={() => navigationWithParams()}
                >
                   Navegação com parametros para Params
                </button>
            </div>
        </div>
    );
}
