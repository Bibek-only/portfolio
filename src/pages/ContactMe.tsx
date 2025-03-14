import { useState } from "react"
import { Github, Linkedin, Twitter, Mail, Send, MapPin, Phone } from "lucide-react"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus]:any= useState(null)

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e:any) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-2 md:py-12 ">
      <div className="ppx-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
        <div className=" mb-12">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Get in{" "}
            <span className="text-[oklch(84.133%_0.065_90.856)] dark:text-[oklch(25.33%_0.016_252.42)]">Touch</span>
          </h2>
          <p className="mt-4 text-stone-600 dark:text-stone-400 ">
            Have a project in mind or want to collaborate? Feel free to reach out to me through any of the channels
            below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-[oklch(84.133%_0.065_90.856)] dark:bg-[oklch(25.33%_0.016_252.42)] rounded-xl shadow-lg p-6 md:p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[oklch(84.133%_0.065_90.856)]/10 dark:bg-[oklch(25.33%_0.016_252.42)]/10 flex items-center justify-center text-[oklch(84.133%_0.065_90.856)] dark:text-[oklch(25.33%_0.016_252.42)]">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Location</h3>
                    <p className="text-stone-600 dark:text-stone-400">New York, USA</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[oklch(84.133%_0.065_90.856)]/10 dark:bg-[oklch(25.33%_0.016_252.42)]/10 flex items-center justify-center text-[oklch(84.133%_0.065_90.856)] dark:text-[oklch(25.33%_0.016_252.42)]">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email</h3>
                    <a
                      href="mailto:bibek@example.com"
                      className="text-stone-600 dark:text-stone-400 hover:text-[oklch(84.133%_0.065_90.856)] dark:hover:text-[oklch(25.33%_0.016_252.42)] transition-colors"
                    >
                      bibek@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[oklch(84.133%_0.065_90.856)]/10 dark:bg-[oklch(25.33%_0.016_252.42)]/10 flex items-center justify-center text-[oklch(84.133%_0.065_90.856)] dark:text-[oklch(25.33%_0.016_252.42)]">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Phone</h3>
                    <a
                      href="tel:+1234567890"
                      className="text-stone-600 dark:text-stone-400 hover:text-[oklch(84.133%_0.065_90.856)] dark:hover:text-[oklch(25.33%_0.016_252.42)] transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Connect with me</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-stone-200 dark:bg-stone-700 flex items-center justify-center text-stone-600 dark:text-stone-400 hover:bg-[oklch(84.133%_0.065_90.856)] dark:hover:bg-[oklch(25.33%_0.016_252.42)] hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-stone-200 dark:bg-stone-700 flex items-center justify-center text-stone-600 dark:text-stone-400 hover:bg-[oklch(84.133%_0.065_90.856)] dark:hover:bg-[oklch(25.33%_0.016_252.42)] hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://twitter.com/username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-stone-200 dark:bg-stone-700 flex items-center justify-center text-stone-600 dark:text-stone-400 hover:bg-[oklch(84.133%_0.065_90.856)] dark:hover:bg-[oklch(25.33%_0.016_252.42)] hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-[oklch(84.133%_0.065_90.856)] dark:bg-[oklch(23.26%_0.014_253.1)] rounded-xl shadow-lg p-6 md:p-8">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-stone-300 dark:border-stone-600 bg-[oklch(91.637%_0.034_90.515)] dark:bg-[oklch(21.15%_0.012_254.09)] text-stone-800 dark:text-stone-200 focus:outline-none focus:ring-2 focus:ring-[oklch(84.133%_0.065_90.856)] dark:focus:ring-[oklch(25.33%_0.016_252.42)]"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-stone-300 dark:border-stone-600 bg-[oklch(91.637%_0.034_90.515)] dark:bg-[oklch(21.15%_0.012_254.09)] text-stone-800 dark:text-stone-200 focus:outline-none focus:ring-2 focus:ring-[oklch(84.133%_0.065_90.856)] dark:focus:ring-[oklch(25.33%_0.016_252.42)]"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 dark:border-stone-600 bg-[oklch(91.637%_0.034_90.515)] dark:bg-[oklch(21.15%_0.012_254.09)] text-stone-800 dark:text-stone-200 focus:outline-none focus:ring-2 focus:ring-[oklch(84.133%_0.065_90.856)] dark:focus:ring-[oklch(25.33%_0.016_252.42)]"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 dark:border-stone-600 bg-[oklch(91.637%_0.034_90.515)] dark:bg-[oklch(21.15%_0.012_254.09)] text-stone-800 dark:text-stone-200 focus:outline-none focus:ring-2 focus:ring-[oklch(84.133%_0.065_90.856)] dark:focus:ring-[oklch(25.33%_0.016_252.42)]"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-stone-600 dark:bg-zink-950 text-stone-300 dark:text-zink-200 font-medium hover:opacity-90 transition-opacity disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>

                {submitStatus === "success" && (
                  <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg">
                    Your message has been sent successfully. I'll get back to you soon!
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

    // <section className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8 py-5 ">
    //   <RoughNotation
    //                 type="underline"
    //                 color="var(--highlight-color)"
    //                 animationDelay={2500} animationDuration={1500}
    //                 show
    //               >
       
    //     <span className="text-4xl font-bold">Contact me</span>
    //   </RoughNotation >
    // </section>