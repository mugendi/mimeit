/**
 * Copyright (c) 2023 Anthony Mugendi
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

const typeMatches = require('./category-types');


function find_types(ext){

    let matches
    let types=[]

    for(let c of typeMatches){
        matches = c.category.matches || []
        if(matches.indexOf(ext)>-1){
            types.push(...c.category.name.split('|'))
            // console.log(c);
            for(let s of c.subcategories||[]){

                if(s.matches.indexOf(ext)>-1){
                    types.push(...s.name.split('|'))
                }      

            }
        }
    }


    return types
}


module.exports = find_types

// let types = find_types('doc')
// console.log(types);