import {
  Wrapper
} from "src/examples/components";
import {
  Content,
  ContentBody,
  ContentHeader,
  ControlLabel,
  ImageUpload,
  ToggleDarkMode
} from "~/components";

export function ExampleFormPage() {

  return (
    <Wrapper>
      <Content>
        <ContentHeader title="Table Example">
          <ToggleDarkMode />
        </ContentHeader>
        <ContentBody>
          <ControlLabel label="Testing">
            <ImageUpload
              maxSize={5}
              accept={['jpeg']}
              ratio={null}
            />
          </ControlLabel>
        </ContentBody>
      </Content>
    </Wrapper>
  );
}
