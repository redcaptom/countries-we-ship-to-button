import React from "react";
import { Page, AppProvider, Layout, Card, RadioButton } from "@shopify/polaris";
import "@shopify/polaris/styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonType: "empty",
    };
  }

  render() {
    const handleButtonTypeSelection = (changedButtonType) => {
      this.setState({ buttonType: changedButtonType });
    };
    return (
      <AppProvider>
        <Page
          title="Welcome!"
          subtitle="Please select the type of button you'd like to generate for your site:"
        >
          <Layout>
            <Layout.Section oneHalf secondary>
              <Card title="Black Button Variant" sectioned>
                <Card.Section title="Demo">
                  <button>Dummy Full Button</button>
                </Card.Section>
                <Card.Section>
                  <RadioButton
                    label="Choose Full Button"
                    helpText="Works well with the default Shopify themes and lighter backgrounds."
                    checked={this.state.buttonType === "full"}
                    id="full"
                    name="full-button"
                    onChange={() => handleButtonTypeSelection("full")}
                  />
                </Card.Section>
              </Card>
            </Layout.Section>
            <Layout.Section oneHalf>
              <Card title="Empty Button Variant" sectioned>
                <Card.Section title="Demo">
                  <button>Dummy Empty Button</button>
                </Card.Section>
                <Card.Section>
                  <RadioButton
                    label="Choose Empty Button"
                    helpText="Works well with darker backgrounds, to create a high-contrast feel."
                    checked={this.state.buttonType === "empty"}
                    id="empty"
                    name="empty-button"
                    onChange={() => handleButtonTypeSelection("empty")}
                  />
                </Card.Section>
              </Card>
            </Layout.Section>
          </Layout>
        </Page>
      </AppProvider>
    );
  }
}

export default App;
