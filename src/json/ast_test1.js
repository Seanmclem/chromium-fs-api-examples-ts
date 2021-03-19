// import React, { useState } from "react";
// import { TextInput } from "ready-fields";

export const file = {
    imports: [
        {
            path: "react",
            list: [
                {
                    type: "default",
                    name: "React"
                },
                {
                    type: "named",
                    name: "useState"
                }
            ]
        },
        {
            path: "ready-fields",
            list: [
                {
                    type: "named",
                    name: "TextInput"
                }
            ]
        },
        // {
        //     path: "ready-fields",
        //     list: [
        //         {
        //             type: "all", //like as
        //             name: "TextInput"
        //         }
        //     ]
        // }
    ],
    functions: [
        {
            exported: false,
            type: "const",
            args: [
                // {
                //     type: "named",
                //     name: "TextInput"
                // }
            ],
            statements: []
        }
    ],
    component: {
        name: "FormCreatorInner",
        type: "default",
        args: [],
        statements: []
    }
}