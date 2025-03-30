import { motion } from "framer-motion";

const schoolData = [
  {
    srNo: 1,
    name: "Nandanvan Durbal Manask Mulanchi Shala",
    address: "Matru Sewa Sangh Nandanwan Residential School and Sheltered Workshop for Intellectually Divyang Children, Near Janki Talkies, Sitabuldi, Nagpur-440012.",
    place: "Nagpur",
    source: "https://matrusewasangh.com/nandanwan-residential-school-and-sheltered-workshop-for-divyang-children/",
    contact: "0712-2526044",
    email: "nandanwan1960@gmail.com",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.2711019588687!2d79.0836791!3d21.141606799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c09457a72eff%3A0xe50aad80721e7c44!2sNandanvan%20Durbal%20Manask%20Mulanchi%20shala!5e0!3m2!1sen!2sin!4v1743110980935!5m2!1sen!2sin"
  },
  {
    srNo: 2,
    name: "Snehangan Residential School for Divyang Children",
    address: "Matru Sewa Sangh Snehangan School for Physically Challenged North Ambazri Road, Sitabuldi, Nagpur-440010",
    place: "Nagpur",
    source: "https://matrusewasangh.com/snehangan-residential-school-for-divyang-children/",
    contact: "9860299199",
    email: "snehangan81@gmail.com",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d519.7124388461708!2d79.0791673328461!3d21.141495196321284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c093a98c982f%3A0x8c2254fba086db6f!2zU25laGFuZ2FuIFNwZWNpYWwgU2Nob29sIOCkuOCljeCkqOClh-CkueCkvuCkguCkl-CkoyDgpIXgpKrgpILgpJcg4KSu4KWB4KSy4KS-4KSC4KSa4KS_IOCktuCkvuCksuCkvg!5e0!3m2!1sen!2sin!4v1743110899081!5m2!1sen!2sin"
  },
  {
    srNo: 3,
    name: "Sevayog Matimand Mulanchi Shala",
    address: "Sevayog Matimand Mulanchi Shala, 36/37, Mangaldeep Colony, Pardi, Nagpur, Maharashtra 440035",
    place: "Nagpur",
    source: "https://www.justdial.com/Nagpur/Sewayog-Matimand-Mulanchi-Shala-Near-Water-Tank-Pardi/0712PX712-X712-171003030212-Y5G9_BZDET",
    contact: "9373128654",
    email: "",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.56162755960477!2d79.15215817479937!3d21.1529538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c70a4e89aab7%3A0x1b53827d0b736429!2sSevayog%20Matimand%20Mulanchi%20Shala!5e0!3m2!1sen!2sin!4v1742496032445!5m2!1sen!2sin",
  },

  {
    srNo: 4,
    name: "Kalpataru Special School",
    address: "Plot No P-14, MIDC, Butibori, in front of Ira International School, Nagpur, Maharashtra 441122",
    place: "Butibori",
    source: "https://www.sandnya.org/",
    contact: "9822932031",
    email: "sss_mr@rediffmail.com",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d405.9858303938339!2d78.99863166015204!3d20.929716628795692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd49932870ec1b5%3A0x80d6b3fa9eb69717!2sKalpataru%20Special%20School!5e0!3m2!1sen!2sin!4v1743110246985!5m2!1sen!2sin",
  },
  {
    srNo: 5,
    name: "Late. Fulchand Jain School for Mentally Retarded Children",
    address: "73MX+GQ5, Koradi Road, Ward no.4, Khaparkheda, Nagpur, Maharashtra 441102",
    place: "Nagpur",
    source: "https://www.indiainfo.net/place/late-fulchand-jain-school-for-mentally-retarded-children-5200875",
    contact: "7218221922",
    email: "",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.35569506223766!2d79.09930518929791!3d21.283690843233984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c37d5770ad79%3A0x7c1ec14f9f98849e!2sLate.%20Fulchand%20jain%20school%20for%20mentally%20retarded%20children!5e0!3m2!1sen!2sin!4v1743110405603!5m2!1sen!2sin",
  },
  {
    srNo: 6,
    name: "Sanmvedana School For Special Needs Children",
    address: "43V9+J77 Sanmvedana Centre for Neurodiverse children, VIP Rd, Dharampeth, Nagpur, Maharashtra – 440010",
    place: "Nagpur",
    source: "https://sanmvedana.org/",
    contact: "9822571619",
    email: "sanmvedana@gmail.com",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.2889915959267!2d79.0676253!3d21.140894499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bfdc3b282bdb%3A0xf9702dd6f84bc571!2sSanmvedana%20school%20for%20children%20with%20autism!5e0!3m2!1sen!2sin!4v1743111321701!5m2!1sen!2sin",
  },
  {
    srNo: 7,
    name: "Arunodaya Special School",
    address: "Plot No. 96, Friends Society, Deendayal Nagar, Road, Swavalambi Nagar, Nagpur, Maharashtra 440025",
    place: "Nagpur",
    source: "https://arunodayarising.wixsite.com/arunodayainstitution",
    contact: "8698422995",
    email: "arunodaya.open.school@outlook.com",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.048692994162!2d79.04969679999999!3d21.1106248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf8f6e6e40d5%3A0x3f8208146c71e4c2!2sArunodaya%20Special%20School!5e0!3m2!1sen!2sin!4v1743111416837!5m2!1sen!2sin",
  },
  {
    srNo: 8,
    name: "Sankalp Pediatric Rehabilitation Center",
    address: "Ajni Rd, opp. TB Ward Medical, Rambagh, Nagpur, Maharashtra 440003",
    place: "Nagpur",
    source: "https://sankalppediatric.org/",
    contact: "9460633366",
    email: "sankalppedia@gmail.com",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3852.8626092672484!2d79.09303177086814!3d21.12771651656345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a15540e8c7%3A0x33aa57fc761ff204!2sSankalp%20Pediatric%20Rehabilitation%20Centre!5e0!3m2!1sen!2sin!4v1743111616000!5m2!1sen!2sin",
  },
  {
    srNo: 9,
    name: "Prayas School For Children With Special Needs",
    address: "1, Amravati Rd, Vasantrao Naik Slum Area, Civil Lines, Nagpur, Maharashtra 440010",
    place: "Nagpur",
    source: "https://www.justdial.com/Nagpur/Prayas-School-For-Children-With-Special-Needs-Dharampeth/0712PX712-X712-190501151744-U2K5_BZDET",
    contact: "8511536839",
    email: "",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d277.4710075295679!2d79.06833644535314!3d21.145813480948078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c10004ac0167%3A0xce429512551beec!2sPrayas%20School%20for%20Children%20with%20Special%20Needs!5e0!3m2!1sen!2sin!4v1743111830226!5m2!1sen!2sin",
  },
  {
    srNo: 10,
    name: "Apanga Mahila Bal Vikas Sanstha (AMBVS)",
    address: "Premises, Plot, Vidarbha Sansodhan Mandal, 1, W High Ct Rd, Civil Lines, Nagpur, Maharashtra 440001",
    place: "Nagpur",
    source: "https://www.ashadeepsanstha.org.in/",
    contact: "9823362161",
    email: "ashadeepngp25@gmail.com",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.074629736999!2d79.0629147!3d21.1494281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c088d9026f8d%3A0x65cbcd8a58a5b28f!2sApanga%20Mahila%20Bal%20Vikas%20Sanstha!5e0!3m2!1sen!2sin!4v1743111944451!5m2!1sen!2sin",
  },
  {
    srNo: 11,
    name: "Jeevoday Special School for Mentally Handicpped",
    address: "Jeevoday Special School for Mentally Handicapped, Residency Road, Sadar, Nagpur-440001 (MH)",
    place: "Nagpur",
    source: "https://www.jeevodayschool.com/",
    contact: "9579845898",
    email: "jeevoeducation@gmail.com",
    mapLink: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d232.54914521458923!2d79.07989201468048!3d21.1609002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0e414e36f53%3A0xda7aecd2d5500abe!2sjeevoday%20special%20school%20for%20mentally%20handicpped!5e0!3m2!1sen!2sin!4v1743112200135!5m2!1sen!2sin",
  },
  {
    srNo: 12,
    name: "Jeevoday College of Special Education (MR)",
    address: "S.F.S. High School & Junior College, Compound, Residency Rd, Sadar, Nagpur, Maharashtra 440001",
    place: "Nagpur",
    source: "https://www.jeevodayschool.com/",
    contact: "9579845898",
    email: "jeevoeducation@gmail.com",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.54970357872335!2d79.08011471468048!3d21.16054479999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0e3dc78a4e3%3A0x96626a163ba73835!2sJeevoday%20College%20of%20Special%20Education%20(MR)!5e0!3m2!1sen!2sin!4v1743112447094!5m2!1sen!2sin",
  },
  {
    srNo: 13,
    name: "Navdeen Special school",
    address: "1st floor, Mahajanwadi, bombaywala steel center, Ram Mandir Rd, Yavatmal, Maharashtra 445001",
    place: "Yavatmal",
    source: "https://navdeen-education.webnode.page/",
    contact: "9970183152",
    email: "navdeen.edu@gmail.com",
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3739.777413506393!2d78.13379739999999!3d20.3920654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd3e8afa2ae68cd%3A0x14712a4b638073bd!2sNavdeen%20Special%20school%2C%20Autism%2C%20speech%2C%20occupational%20therapy!5e0!3m2!1sen!2sin!4v1743364111846!5m2!1sen!2sin"  
  },
];


const Schools = () => {
  return (
    <motion.section
      className="mt-32 px-4 md:px-12 lg:px-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-600 dark:text-blue-400 mb-8 neon-text">
        Schools in Vidarbha
      </h2>

      <div className="block max-[1463px]:hidden w-full overflow-x-auto">
        <table className="mb-20 min-w-[1000px] w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-2xl rounded-lg border-[1px] border-black dark:border-white">
          <thead className="bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-700 dark:to-indigo-600 text-white text-lg">
            <tr>
              {["Sr. No", "Name", "Address", "Find Here", "Place", "Contact", "Email", "Source"].map((header, index) => (
                <th key={index} className="p-4 border border-gray-400 dark:border-gray-600 text-center uppercase tracking-wider font-bold">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-center text-gray-700 dark:text-gray-300">
            {schoolData.map((school, index) => (
              <tr key={index} className="border border-gray-400 dark:border-gray-600">
                <td className="p-4 border border-gray-400 dark:border-gray-600 font-semibold">{school.srNo}</td>
                <td className="p-4 border border-gray-400 dark:border-gray-600 font-semibold text-blue-600 dark:text-blue-400">
                  {school.name}
                </td>
                <td className="p-4 border border-gray-400 dark:border-gray-600">{school.address}</td>
                <td className="p-4 border border-gray-400 dark:border-gray-600">
                  <div className="flex justify-center items-center">
                    <iframe
                      src={school.mapLink}
                      width="200"
                      height="150"
                      className="border-2 border-blue-500 dark:border-blue-400 rounded-lg shadow-md"
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                </td>
                <td className="p-4 border border-gray-400 dark:border-gray-600">{school.place}</td>
                <td className="p-4 border border-gray-400 dark:border-gray-600 font-semibold">{school.contact}</td>
                <td className="p-4 border border-gray-400 dark:border-gray-600">
                  <a
                    href={`mailto:${school.email}`}
                    className="text-blue-500 dark:text-blue-400 font-semibold transition no-underline"
                  >
                    {school.email ? school.email : "N/A"}
                  </a>
                </td>
                <td className="p-4 border border-gray-400 dark:border-gray-600 font-semibold">
                  {school.source ? (
                    <button
                      onClick={() => window.open(school.source, "_blank")}
                      className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold transition duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:bg-blue-700"
                    >
                      Visit Source
                    </button>
                  ) : (
                    "N/A"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="hidden max-[1463px]:block">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {schoolData.map((school, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg neon-border hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">{school.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                <strong>📍 Address:</strong> {school.address}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                <strong>📌 Place:</strong> {school.place}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                <strong>📞 Contact:</strong> {school.contact}
              </p>
              <a
                href={`mailto:${school.email}`}
                className="text-blue-500 dark:text-blue-400 font-semibold transition mt-1 block no-underline"
              >
                ✉️ {school.email}
              </a>

              <p className="text-gray-600 dark:text-gray-300 mt-1">
                <strong>🗺️ Location:</strong>
              </p>
              <iframe
                src={school.mapLink}
                width="100%"
                height="150"
                className="border-0 rounded-lg shadow-md mt-3"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              <p className="text-gray-600 dark:text-gray-300 mt-8 flex items-center gap-2">
                <strong>🔗 Source:</strong>
                {school.source ? (
                  <button
                    onClick={() => window.open(school.source, "_blank")}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold transition duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    Visit Source
                  </button>
                ) : (
                  "No Source Available"
                )}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Schools;
