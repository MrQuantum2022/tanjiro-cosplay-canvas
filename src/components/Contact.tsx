
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Check, Mail, Send } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  service: z.string().min(1, { message: "Please select a service" }),
  message: z.string().min(10, { message: "Message is too short" }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    // In a real scenario, you'd send this data to a server
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      form.reset();
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-2">
            Book a <span className="text-tanjiro-primary">Session</span>
          </h2>
          <div className="w-24 h-1 bg-tanjiro-primary mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Interested in working together? Fill out the form below to get started.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-tanjiro-primary mb-2">Services Offered</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-tanjiro-primary rounded-full"></span>
                    <span>Professional Cosplay Photoshoots</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-tanjiro-primary rounded-full"></span>
                    <span>Cosplay Workshops</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-tanjiro-primary rounded-full"></span>
                    <span>Custom Costume Creation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-tanjiro-primary rounded-full"></span>
                    <span>Event Appearances</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-tanjiro-primary mb-2">Contact Information</h4>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="text-tanjiro-primary" size={20} />
                  <a href="mailto:tusharkashyap877@gmail.com" className="hover:text-tanjiro-primary transition-colors">
                    tusharkashyap877@gmail.com
                  </a>
                </div>
              </div>

              <div className="pt-4">
                <a 
                  href="https://instagram.com/digitally__artistic_" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center w-max gap-2 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg text-white hover:opacity-90 transition-opacity"
                >
                  <span className="text-white">Follow on Instagram</span>
                  <span className="text-xs">@digitally__artistic_</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="h-16 w-16 rounded-full bg-tanjiro-primary/20 flex items-center justify-center mb-4">
                  <Check className="h-8 w-8 text-tanjiro-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                <p className="text-gray-300">Your message has been sent successfully.</p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name" 
                            className="bg-gray-800 border-gray-700 text-white" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="your.email@example.com" 
                            type="email"
                            className="bg-gray-800 border-gray-700 text-white" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Service</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-gray-800 border-gray-700 text-white">
                            <SelectItem value="photoshoot">Cosplay Photoshoot</SelectItem>
                            <SelectItem value="workshop">Workshop</SelectItem>
                            <SelectItem value="costume">Custom Costume Creation</SelectItem>
                            <SelectItem value="event">Event Appearance</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us more about your project..." 
                            className="bg-gray-800 border-gray-700 text-white min-h-32" 
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription className="text-gray-400">
                          Please provide details about your requirements.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-tanjiro-primary to-tanjiro-secondary hover:opacity-90"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
