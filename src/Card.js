import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

class CardExampleCard extends React.Component {
  render() {
    return (
      <Card>
        <Image
          style={{ height: "100%" }}
          src={this.props.image}
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>{this.props.title}</Card.Header>
          <Card.Meta>
            <span className="date">{this.props.subtitle}</span>
          </Card.Meta>
          <Card.Description>{this.props.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            {this.props.followerNumber} フォロワー
          </a>
        </Card.Content>
      </Card>
    );
  }
}

export default CardExampleCard;
