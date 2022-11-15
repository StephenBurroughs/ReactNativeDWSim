import React from 'react'
import XElement from 'xelement'
import TypeChecker from 'typechecker'


class XMLSerializer {

    Deserialize(obj: Object, xmlProps: XElement.XElement[], Fields?: Boolean): Boolean {
        let skip = false;
        if (!Fields) {
            let objType = TypeChecker.getObjectType(obj)
        }

        return true
    }

    Serialize(obj: Object, fields: Boolean): XElement.XElement[]{
        return []
    }

    ArrayToString(source: []): String {
        return "";
    }

    StringToArray(source: String): [] {
        return [];
    }
}