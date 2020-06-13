import React from "react";
import { Page, AppProvider, Layout, Card } from "@shopify/polaris";
import "@shopify/polaris/styles.css";

class App extends React.Component {
  render() {
    return (
      <AppProvider>
        <Page
          title="Welcome!"
          subtitle="Please select the type of button you'd like to generate for your site:"
        >
          <Layout>
            <Layout.Section oneHalf>
              <Card title="Black Button Variant">
                <Card.Section title="Demo">
                  <button>Dummy Black Button</button>
                </Card.Section>
              </Card>
            </Layout.Section>
            <Layout.Section oneHalf>
              <Card title="White Button Variant">
                <Card.Section title="Demo">
                  <button>Dummy White Button</button>
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
