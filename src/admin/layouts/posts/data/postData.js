/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "admin/components/MDBox";
import MDTypography from "admin/components/MDTypography";
import MDAvatar from "admin/components/MDAvatar";
import MDBadge from "admin/components/MDBadge";

// Images
import team2 from "admin/assets/images/team-2.jpg";
import MDButton from "admin/components/MDButton";
import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/posts`);
  const data = await response.json();
  return data;
};

export default function PostData() {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchData,
    refetchIntervalInBackground: 1000,
  });

  console.log(data);

  const deleteData = async (id) => {
    const konfirmasi = window.confirm(
      "Apakah anda yakin ingin menghapus data ini?"
    );

    if (!konfirmasi) return;

    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/posts/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    if (data) {
      alert("Data berhasil dihapus");
      window.location.reload();
    }
  };

  const Author = ({ image, name }) => (
    <MDBox
      display="flex"
      alignItems="center"
      lineHeight={1}
      style={{ width: "13rem" }}
    >
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  const convertToPlainText = (htmlContent) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    const paragraphs = doc.body.querySelectorAll("p");

    return Array.from(paragraphs).map((p, index) => (
      <p key={index}>{p.innerText}</p>
    ));
  };

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography
        display="block"
        variant="caption"
        color="text"
        fontWeight="medium"
        style={{ width: "10rem" }}
      >
        <div
        // dangerouslySetInnerHTML={{
        //   __html: convertToPlainText(description),
        // }}
        >
          {convertToPlainText(description)}
        </div>
      </MDTypography>
    </MDBox>
  );

  const potongKalimat = (kalimat) => {
    return kalimat.split(" ").slice(0, 20).join(" ") + "...";
  };

  return {
    columns: [
      { Header: "Judul Post", accessor: "judul", align: "left" },
      {
        Header: "Isi Post",
        accessor: "deskripsi",
        align: "left",
      },
      { Header: "nama penulis", accessor: "penulis", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: data
      ? data.data.map((item) => ({
          judul: <Author image={item.image} name={item.judul} />,
          deskripsi: <Job description={potongKalimat(item.body)} />,
          penulis: (
            <MDTypography
              component="a"
              href="#"
              variant="caption"
              color="text"
              fontWeight="medium"
            >
              {item.penulis}
            </MDTypography>
          ),
          action: (
            <div style={{ display: "flex", gap: 4 }}>
              <MDButton
                variant="outlined"
                color="info"
                href={`/admin/post/${item.id}`}
              >
                <MDTypography
                  component="a"
                  variant="caption"
                  color="text"
                  fontWeight="medium"
                >
                  Edit
                </MDTypography>
              </MDButton>

              <MDButton
                variant="outlined"
                color="error"
                onClick={() => deleteData(item.id)}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <MDTypography
                    component="a"
                    variant="caption"
                    style={{ color: "red" }}
                    fontWeight="medium"
                  >
                    Delete
                  </MDTypography>
                </div>
              </MDButton>
            </div>
          ),
        }))
      : [
          {
            judul: <Author image={team2} name="Belum Ada Post" />,
            deskripsi: (
              <Job
                description={potongKalimat(
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nam neque voluptatum eius, est dolorem fuga animi possimus doloribus. Voluptas maiores quos libero natus nemo maxime aspernatur autem iusto voluptate."
                )}
              />
            ),
            penulis: (
              <MDTypography
                component="a"
                href="#"
                variant="caption"
                color="text"
                fontWeight="medium"
              >
                Udin
              </MDTypography>
            ),
            action: (
              <div style={{ display: "flex", gap: 4 }}>
                <MDButton
                  variant="outlined"
                  color="info"
                  href={`/admin/post/000`}
                >
                  <MDTypography
                    component="a"
                    variant="caption"
                    color="text"
                    fontWeight="medium"
                  >
                    Edit
                  </MDTypography>
                </MDButton>

                <MDButton
                  variant="outlined"
                  color="error"
                  onClick={() => alert("tambahkan post")}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    <MDTypography
                      component="a"
                      variant="caption"
                      style={{ color: "red" }}
                      fontWeight="medium"
                    >
                      Delete
                    </MDTypography>
                  </div>
                </MDButton>
              </div>
            ),
          },
        ],
  };
}
