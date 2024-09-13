import { useForm } from "react-hook-form";
import {
  Wrapper
} from "src/examples/components";
import {
  Button,
  Content,
  ContentAction,
  ContentBody,
  ContentHeader,
  ControlLabel,
  ToggleDarkMode
} from "~/components";
import {
  HookFormProvider,
  InputImageCropUpload
} from "~/components/hook-form";

export function ExampleFormPage() {

  const form = useForm();

  const handleSubmit = form.handleSubmit(
    (formData) => {
      console.log("🚀 ~ handleSubmit ~ formData:", formData)
    },
    (error) => {
      console.log("🚀 ~ ExampleFormPage ~ error:", error)
    }
  );

  return (
    <Wrapper>
      <Content>
        <ContentHeader title="Table Example">
          <ToggleDarkMode />
        </ContentHeader>
        <ContentBody>
          <HookFormProvider form={form}>
            <ControlLabel label="Testing">
              <InputImageCropUpload
                // rule={{ required: "Field cannot be empty!" }}
                maxSize={5}
                accept={['png', 'jpeg']}
                ratio={'16:9'}
                name="image"
              />
            </ControlLabel>
          </HookFormProvider>
        </ContentBody>
        <ContentAction>
          <Button onClick={handleSubmit}>
            Submit
          </Button>
        </ContentAction>
      </Content>
    </Wrapper>
  );
}
