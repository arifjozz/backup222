import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import Kartu from '../../Components/Kartu/Kartu';
import Bottom from '../../Components/Bottom/Bottom';
import Aux from '../../hoc/Auxiliary';
import Appbar from '../../Components/Header/Appbar'
import { Card, Icon, Grid, Image, GridColumn } from 'semantic-ui-react';
class Berita extends Component {
  render() {
    return (

      <div>
        <Appbar />
      <Grid>
        <Grid.Column width={11}>
        
        </Grid.Column>
        <Aux>


<Kartu />
<Bottom />
</Aux>
        <Grid.Column width={5}>
          <Image src="/images/wireframe/media-paragraph.png" />
        </Grid.Column>
      </Grid>
    </div>
     
    );
  }
}
export default Berita;
