import React, { Component } from 'react';
import Tesbihbs from './components/Tesbihbs';
import './counter.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

class App extends Component {
  render() {
    return (
      <div>
        <div><h2 className='centertext'>تسابيح</h2></div>
        <div className='row'>
            <Tesbihbs text={ "لا إله إلا الله"}/>
            <Tesbihbs text={ "الحمد لله"  } />
            <Tesbihbs text={ "استغفر الله" } />
            <Tesbihbs text={ "سبحان الله"  } />
            <Tesbihbs text={ "رب إغفر لي ولوالدي"  } />
            <Tesbihbs text={ "لا حول ولا قوة إلا بالله العظيم"  } />
            <Tesbihbs text={ "الله اكبر"  } />
            <Tesbihbs text={ "إنا لله وإنا اليه راجعون"  } />
            <Tesbihbs text={ "لا إله إلا الله وحده لا شريك له، لهُ الملك ، ولهُ الحمدُ، وهو على كل شيء قدير"  } />
            <Tesbihbs text={ "لا إله إلا نت سبحانك إني كنت من الظالمين"  } />
            <Tesbihbs text={ "أستغفر الله الذى لا إله إلا هو الحيّ القيّوم وأتوب إليه"  } />
            <Tesbihbs text={ "ربِ إغفر لي"  } />
            <Tesbihbs text={ "لا إله إلا الله وحده لا شريك له، لهُ الملك، ولهُ الحمد، وهو على كل شيء قدير"  } />
            <Tesbihbs text={ "أستغفر الله الذى لا إله إلا هو الحيّ القيّوم وأتوب إليه"  } />
            <Tesbihbs text={ "سبحان الله وبحمده سبحان الله العظيم"  } />  
        </div>
    </div>
    
    );
  }
}

export default App;
