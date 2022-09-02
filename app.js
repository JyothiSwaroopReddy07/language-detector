import { franc } from 'franc';
import langs from 'langs';
import colors from 'colors'
const input=process.argv.slice(2);
const string =input.join(' ');
const code=franc(string);
if(code==='und'){
    console.log('Sorry Cant find any language for this phrase'.red);
}
else
{
    const lang=langs.where("3",code);
    if(lang===undefined)
    {
        console.log('Sorry Cant find any language for this phrase'.red);
    }
    else{
        console.log(`Our best guess is :${lang.name}`.green);
    }
    
}


