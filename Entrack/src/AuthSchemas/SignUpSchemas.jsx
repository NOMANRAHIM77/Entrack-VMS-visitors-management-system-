import {z} from "zod"

 const SignUpSchemas=z.object({
    firstname : z.string().nonempty("firstname is required").min(3, "At least 3 characters"),
    surname:z.string(),
    email: z.string().min(1, "Email is required").email("Enter a valid email"),
    organizationName:z.string().min(3,"At least 3 characters"),
      password: z.string()
    .nonempty("password is required")
    .min(6, "Password must be at least 6 characters")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[@$!%*?&]/, "Password must contain at least one special character (@$!%*?&#)"),
})
export default SignUpSchemas