return <ThemeContext.Consumer>
{
    ({theme,setTheme})=>{
        
    }
}
</ThemeContext.Consumer> 

import { ThemeContext } from '../../../provider/ThemeProvider';
import { themes } from '../../../constants/theme';

setTheme(themes.dark)