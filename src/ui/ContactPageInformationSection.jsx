import { Globe, Headphones, Mail, MapPin, Phone } from "lucide-react";

function ContactPageInformationSection() {
  return (
    <div>
      <header className="mb-4">
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
      </header>
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          <div className="flex items-start gap-3">
            <MapPin className=" w-5 h-5 text-green-600 mt-1" />
            <div>
              <p class="font-medium">Headquarters</p>
              <p className="text-gray-600">
                123 Commerce Street <br /> New York, NY 10001 <br /> United
                States
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-green-600 mt-1" />
            <div>
              <p class="font-medium">Phone</p>
              <p class="text-gray-600">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Mail className=" min-w-5 min-h-5 text-green-600 mt-1" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-gray-600">support@dummystore.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Globe className=" w-5 h-5 text-green-600 mt-1" />
            <div>
              <p className="font-medium">Website</p>
              <p className="text-gray-600">www.dummystore.com</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Department Contacts</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="font-medium">General Support</span>
              <span className="text-sm text-gray-600">
                support@dummystore.com
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="font-medium">Sales Inquiries</span>
              <span className="text-sm text-gray-600">
                sales@dummystore.com
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="font-medium">Technical Support</span>
              <span className="text-sm text-gray-600">tech@dummystore.com</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="font-medium">Partnerships</span>
              <span className="text-sm text-gray-600">
                partners@dummystore.com
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="font-medium">Press &amp; Media</span>
              <span className="text-sm text-gray-600">
                press@dummystore.com
              </span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
          <div className="space-y-2 text-gray-600">
            <div className="flex justify-between">
              <span>Monday - Friday:</span>
              <span>9:00 AM - 6:00 PM EST</span>
            </div>
            <div className="flex justify-between">
              <span>Saturday:</span>
              <span>10:00 AM - 4:00 PM EST</span>
            </div>
            <div className="flex justify-between">
              <span>Sunday:</span>
              <span>Closed</span>
            </div>
            <div className="mt-4 p-3 bg-green-50 rounded-lg">
              <p className="text-sm text-green-700 font-medium">
                <Headphones className="lucide lucide-headphones w-4 h-4 inline mr-1" />
                Emergency support available 24/7
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPageInformationSection;
