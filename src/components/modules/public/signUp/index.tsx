import BaseButton from "../../ui/button";
import GradientLayout from "../../ui/gradientLayout";
import BaseInput from "../../ui/input";

export default function SignUp() {
  return (
    <GradientLayout>
      <div>
        <h3>Sign up</h3>
        <p className="text--xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div>
          <div>
            <BaseInput
              label="Email address"
              placeholder="Andrew.Smith@instinctif.com"
            />
            <BaseInput
              label="Password"
              placeholder="Andrew.Smith@instinctif.com"
            />
          </div>
          <p className="text--2xs">At least 10 characters must be included.</p>
          <p className="text--2xs">
            By signing up, you agree to the Terms and Conditions and Privacy
            Policy.{" "}
          </p>

          <BaseButton variant="primary">Sign up</BaseButton>
        </div>
      </div>
    </GradientLayout>
  );
}
