import React from 'react';

import VSeparator from '../../components/VSeparator/VSeparator'
import theme, {ratio, rhythm} from '../../global/theme'
import { Button } from '@material-ui/core';

const genGridArray: (n: number) => number[] = (n) => {
  const outArray: number[] = []
  for ( let i = 0; i < n; i++) {
    outArray.push( i )
  }
  return outArray
}


const TypographyTest: React.FunctionComponent = () => {

  const [show, updateShow] = React.useState("block")
  const toggle: () => void = () => {
    if (show === 'block') {
      updateShow('none')
    } else {
      updateShow('block')
    }
  }

  const [offset, updateOffset] = React.useState(0)
  const up: () => void = () => {
    updateOffset(offset - 1)
  }
  const down: () => void = () => {
    updateOffset(offset + 1)
  }

  return(
    <div>
        <div style={{width: '70%',display: 'flex',justifyContent: 'space-around'}}>
          <Button onClick={toggle} variant="contained" color="secondary">
            Grid Toggle
          </Button>
          <Button onClick={up} variant="contained" color="secondary">
            1px up
          </Button>
          <Button onClick={down} variant="contained" color="secondary">
            1px down
          </Button>
        </div>

        <VSeparator lines={2} />
        {/* Background grid */}
        <div style={{position:'relative', display: show, width: '100%'}}>
          <div style={{ position: 'absolute', top: `${offset}px`, width: '100%'}}>
            {genGridArray(40).map((value) => {
              return (
                <div style={{
                  position: 'absolute',
                  borderStyle: 'solid', borderColor: 'rgb(162, 162, 162)',
                  borderWidth: '0', borderBottomWidth: '1px',
                  height: `${rhythm}rem`, width: '100%',
                  top: `${value * rhythm}rem`
                }}>
                </div>
              )
            })}
          </div>
        </div>
        
        <h5> h5 Short title</h5>
        <p>One line paragraph</p>
        <p>Ut eiusmod nulla consequat non Lorem et dolore Lorem consectetur commodo adipisicing ut. Sint fugiat laboris quis esse enim non Lorem duis esse nisi adipisicing tempor. Enim sint sint nulla nisi enim est est incididunt exercitation. Aliqua exercitation dolor enim cillum proident ut tempor do. Proident exercitation esse enim consequat nulla ullamco qui aliquip in id magna amet esse nostrud.</p>
        <h5>h5 Stupidly long title to be sure that it will overflow. Perhaps it should be even longer</h5>
        <p>Ut eiusmod nulla consequat non Lorem et dolore Lorem consectetur commodo adipisicing ut. Sint fugiat laboris quis esse enim non Lorem duis esse nisi adipisicing tempor. Enim sint sint nulla nisi enim est est incididunt exercitation. Aliqua exercitation dolor enim cillum proident ut tempor do. Proident exercitation esse enim consequat nulla ullamco qui aliquip in id magna amet esse nostrud.</p>
        <h4> h4 Short title</h4>
        <p>Ut eiusmod nulla consequat non Lorem et dolore Lorem consectetur commodo adipisicing ut.
        Sint fugiat laboris quis esse enim non Lorem duis esse nisi adipisicing tempor.
        Enim sint sint nulla nisi enim est est incididunt exercitation.
        Aliqua exercitation dolor enim cillum proident ut tempor do.
      Proident exercitation esse enim consequat nulla ullamco qui aliquip in id magna amet esse nostrud.</p>
        <h4>h4 Stupidly long title to be sure that it will overflow. Perhaps it should be even longer</h4>
        <p>Ut eiusmod nulla consequat non Lorem et dolore Lorem consectetur commodo adipisicing ut. Sint fugiat laboris quis esse enim non Lorem duis esse nisi adipisicing tempor. Enim sint sint nulla nisi enim est est incididunt exercitation. Aliqua exercitation dolor enim cillum proident ut tempor do. Proident exercitation esse enim consequat nulla ullamco qui aliquip in id magna amet esse nostrud.</p>

        <h3 > h3 Short title</h3 >
        <p>Ut eiusmod nulla consequat non Lorem et dolore Lorem consectetur commodo adipisicing ut. Sint fugiat laboris quis esse enim non Lorem duis esse nisi adipisicing tempor. Enim sint sint nulla nisi enim est est incididunt exercitation. Aliqua exercitation dolor enim cillum proident ut tempor do. Proident exercitation esse enim consequat nulla ullamco qui aliquip in id magna amet esse nostrud.</p>
        <h3>h3 Stupidly long title to be sure that it will overflow. Perhaps it should be even longer</h3>
        <p>Ut eiusmod nulla consequat non Lorem et dolore Lorem consectetur commodo adipisicing ut. Sint fugiat laboris quis esse enim non Lorem duis esse nisi adipisicing tempor. Enim sint sint nulla nisi enim est est incididunt exercitation. Aliqua exercitation dolor enim cillum proident ut tempor do. Proident exercitation esse enim consequat nulla ullamco qui aliquip in id magna amet esse nostrud.</p>

        <h2 > h2 Short title</h2 >
        <p>Ut eiusmod nulla consequat non Lorem et dolore Lorem consectetur commodo adipisicing ut. Sint fugiat laboris quis esse enim non Lorem duis esse nisi adipisicing tempor. Enim sint sint nulla nisi enim est est incididunt exercitation. Aliqua exercitation dolor enim cillum proident ut tempor do. Proident exercitation esse enim consequat nulla ullamco qui aliquip in id magna amet esse nostrud.</p>
        <h2>h2 Stupidly long title to be sure that it will overflow. Perhaps it should be even longer</h2>
        <p>Ut eiusmod nulla consequat non Lorem et dolore Lorem consectetur commodo adipisicing ut. Sint fugiat laboris quis esse enim non Lorem duis esse nisi adipisicing tempor. Enim sint sint nulla nisi enim est est incididunt exercitation. Aliqua exercitation dolor enim cillum proident ut tempor do. Proident exercitation esse enim consequat nulla ullamco qui aliquip in id magna amet esse nostrud.</p>

        <h1 > h1 Short title</h1 >
        <p>Ut eiusmod nulla consequat non Lorem et dolore Lorem consectetur commodo adipisicing ut. Sint fugiat laboris quis esse enim non Lorem duis esse nisi adipisicing tempor. Enim sint sint nulla nisi enim est est incididunt exercitation. Aliqua exercitation dolor enim cillum proident ut tempor do. Proident exercitation esse enim consequat nulla ullamco qui aliquip in id magna amet esse nostrud.</p>
        <h1>h1 Stupidly long title to be sure that it will overflow. Perhaps it should be even longer</h1>
        <p>Ut eiusmod nulla consequat non Lorem et dolore Lorem consectetur commodo adipisicing ut. Sint fugiat laboris quis esse enim non Lorem duis esse nisi adipisicing tempor. Enim sint sint nulla nisi enim est est incididunt exercitation. Aliqua exercitation dolor enim cillum proident ut tempor do. Proident exercitation esse enim consequat nulla ullamco qui aliquip in id magna amet esse nostrud.</p>

        <VSeparator lines={2} />
        <ol>
          <li> ratio = {ratio} rhythm={rhythm}</li>
        <li> {Math.pow(ratio, 2)} h4= {rhythm * 0.95}rem</li>
        <li> {Math.pow(ratio, 3)} h3= {rhythm * 1.4}rem</li>
        <li> {Math.pow(ratio, 4)} h4= {rhythm * 0.95}rem</li>
        <li> {Math.pow(ratio, 5)} h4= {rhythm * 0.95}rem</li>
        <li> {Math.pow(ratio, 6)} h4= {rhythm * 0.95}rem</li>
        </ol>
        <ol>
          <li> font {theme.typography.h1.fontSize} line {theme.typography.h1.lineHeight}</li>
          <li> font {theme.typography.h2.fontSize} line {theme.typography.h2.lineHeight}</li>
          <li> font {theme.typography.h3.fontSize} line {theme.typography.h3.lineHeight}</li>
          <li> font {theme.typography.h4.fontSize} line {theme.typography.h4.lineHeight}</li>
          <li> font {theme.typography.h5.fontSize} line {theme.typography.h5.lineHeight}</li>


        </ol>
    </div>
  );
}

export default TypographyTest;