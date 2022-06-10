var documenterSearchIndex = {"docs":
[{"location":"license/#License","page":"License","title":"License","text":"","category":"section"},{"location":"license/","page":"License","title":"License","text":"MIT LicenseCopyright (c) 2021-present The Trixi Authors (see https://github.com/trixi-framework/Trixi.jl)Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.","category":"page"},{"location":"contributing/#Contributing","page":"Contributing","title":"Contributing","text":"","category":"section"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"ReadVTK is an open-source project and we are very happy to accept contributions from the community. Please feel free to open issues or submit patches (preferably as pull requests) any time. For planned larger contributions, it is often beneficial to get in contact with us first (e.g., by creating an issue).","category":"page"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"ReadVTK and its contributions are licensed under the MIT license (see License). As a contributor, you certify that all your contributions are in conformance with the Developer Certificate of Origin (Version 1.1), which is reproduced below.","category":"page"},{"location":"contributing/#Developer-Certificate-of-Origin-(Version-1.1)","page":"Contributing","title":"Developer Certificate of Origin (Version 1.1)","text":"","category":"section"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"The following text was taken from https://developercertificate.org:","category":"page"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"Developer Certificate of Origin\nVersion 1.1\n\nCopyright (C) 2004, 2006 The Linux Foundation and its contributors.\n1 Letterman Drive\nSuite D4700\nSan Francisco, CA, 94129\n\nEveryone is permitted to copy and distribute verbatim copies of this\nlicense document, but changing it is not allowed.\n\n\nDeveloper's Certificate of Origin 1.1\n\nBy making a contribution to this project, I certify that:\n\n(a) The contribution was created in whole or in part by me and I\n    have the right to submit it under the open source license\n    indicated in the file; or\n\n(b) The contribution is based upon previous work that, to the best\n    of my knowledge, is covered under an appropriate open source\n    license and I have the right under that license to submit that\n    work with modifications, whether created in whole or in part\n    by me, under the same open source license (unless I am\n    permitted to submit under a different license), as indicated\n    in the file; or\n\n(c) The contribution was provided directly to me by some other\n    person who certified (a), (b) or (c) and I have not modified\n    it.\n\n(d) I understand and agree that this project and the contribution\n    are public and that a record of the contribution (including all\n    personal information I submit with it, including my sign-off) is\n    maintained indefinitely and may be redistributed consistent with\n    this project or the open source license(s) involved.","category":"page"},{"location":"reference/#ReadVTK.jl-API","page":"Reference","title":"ReadVTK.jl API","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"CurrentModule = ReadVTK","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Modules = [ReadVTK]","category":"page"},{"location":"reference/#ReadVTK.VTKCells","page":"Reference","title":"ReadVTK.VTKCells","text":"VTKCells{Connectivity, Offsets, Types}\n\nStore the connectivity, offsets, and types information from the VTK file as one-dimensional array-like containers. See the VTK file format documentation for information on how to connect the connectivity and offset arrays to the actual geometric points.\n\nYou may use length to determine the number of cells from a VTKCells object.\n\nSee also: get_points\n\n\n\n\n\n","category":"type"},{"location":"reference/#ReadVTK.VTKData","page":"Reference","title":"ReadVTK.VTKData","text":"VTKData\n\nConvenience type to hold information about available data arrays for cells or points.\n\nSupports a collectible/dictionary-like syntax, e.g., keys(vtk_data) to show available data arrays or vtk_data[\"varname\"] to retrieve the VTKDataArray for variable varname.\n\n\n\n\n\n","category":"type"},{"location":"reference/#ReadVTK.VTKDataArray","page":"Reference","title":"ReadVTK.VTKDataArray","text":"VTKDataArray{T, N, Format}\n\nHold information about a single VTK data array (cell data or point data).\n\nThe data type is encoded as T, N represents the size of the second dimension in case of multi-dimensonal arrays (or 1 for a vector), and Format encodes in which format the data is stored in the XML file.\n\nThe actual data can be retrieved by calling get_data on the VTKDataArray object.\n\nSee also: get_data\n\n\n\n\n\n","category":"type"},{"location":"reference/#ReadVTK.VTKDataArray-Tuple{Any, Any}","page":"Reference","title":"ReadVTK.VTKDataArray","text":"VTKDataArray(xml_element, vtk_file)\n\nCreate a lightweight container for a given xml_element and the corresponding vtk_file.\n\nThe xml_element must be of type DataArray and the vtk_file parameter is required for retrieving the actual data. You can pass a VTKDataArray object to get_data to retrieve the actual data.\n\nSee also: get_data\n\n\n\n\n\n","category":"method"},{"location":"reference/#ReadVTK.VTKFile","page":"Reference","title":"ReadVTK.VTKFile","text":"VTKFile\n\nHold all relevant information about a VTK XML file that has been read in.\n\nFields\n\nfilename: original path to the VTK file that has been read in\nxml_file: object that represents the XML file\nfile_type: currently only UnstructuredGrid is supported\nversion: currently only v1.0 is supported\nbyte_order: can be LittleEndian or BigEndian and must currently be the same as the system's\ncompressor: can be empty (no compression) or vtkZLibDataCompressor\nappended_data: in case of appended data (see XML documentation), the data is stored here for                  convenient retrievel (otherwise it is empty)\nn_points: number of points in the VTK file\nn_cells: number of cells in the VTK file`\n\n\n\n\n\n","category":"type"},{"location":"reference/#ReadVTK.VTKFile-Tuple{Any}","page":"Reference","title":"ReadVTK.VTKFile","text":"VTKFile(filename)\n\nRead in and parse the VTK XML file specified by its filename.\n\n\n\n\n\n","category":"method"},{"location":"reference/#ReadVTK.get_cell_data-Tuple{Any}","page":"Reference","title":"ReadVTK.get_cell_data","text":"get_cell_data(vtk_file)\n\nRetrieve a lightweight VTKData object with the cell data of the given VTK file.\n\nSee also: VTKData, get_point_data\n\n\n\n\n\n","category":"method"},{"location":"reference/#ReadVTK.get_cells-Tuple{Any}","page":"Reference","title":"ReadVTK.get_cells","text":"get_cells(vtk_file)\n\nRetrieve VTK cell information as an object of type VTKCells.\n\nSee also: VTKCells\n\n\n\n\n\n","category":"method"},{"location":"reference/#ReadVTK.get_data-Tuple{VTKDataArray}","page":"Reference","title":"ReadVTK.get_data","text":"get_data(data_array::VTKDataArray)\n\nRetrieve actual data from a VTKDataArray as a one- or two-dimensional array-like container.\n\nNote: This function is not type stable but could be - help wanted!\n\n\n\n\n\n","category":"method"},{"location":"reference/#ReadVTK.get_example_file-Tuple{Any}","page":"Reference","title":"ReadVTK.get_example_file","text":"get_example_file(filename; head=\"main\", output_directory=\".\", force=false)\n\nRetrieve an example file from the ReadVTK_examples repository at commit/branch head and store it in the output_directory. If the file already exists locally, do not download the file again unless force is true. Return the local path to the downloaded file.\n\n\n\n\n\n","category":"method"},{"location":"reference/#ReadVTK.get_point_data-Tuple{Any}","page":"Reference","title":"ReadVTK.get_point_data","text":"get_point_data(vtk_file)\n\nRetrieve a lightweight VTKData object with the point data of the given VTK file.\n\nSee also: VTKData, get_cell_data\n\n\n\n\n\n","category":"method"},{"location":"reference/#ReadVTK.get_points-Tuple{Any}","page":"Reference","title":"ReadVTK.get_points","text":"get_points(vtk_file)\n\nRetrieve VTK points as a two-dimensional array-like container.\n\nThe points are stored in dimension × points format. Note that in VTK, points are always stored three-dimensional, even for 1D or 2D files.\n\nSee also: get_cells\n\n\n\n\n\n","category":"method"},{"location":"#ReadVTK.jl","page":"Home","title":"ReadVTK.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"With ReadVTK.jl you can read in data from VTK XML files in Julia. It aims to complement the excellent package WriteVTK.jl. ReadVTK is part of the Trixi Framework.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Note: ReadVTK was mainly motivated by wanting to write proper tests for Trixi2Vtk.jl. A lot of useful features are still missing (see What does not work), and community contributions to improve this package are welcome!","category":"page"},{"location":"#Usage","page":"Home","title":"Usage","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"First, load the package with","category":"page"},{"location":"","page":"Home","title":"Home","text":"using ReadVTK","category":"page"},{"location":"","page":"Home","title":"Home","text":"Open a VTK file by creating a VTKFile object and passing the filename to the constructor:","category":"page"},{"location":"","page":"Home","title":"Home","text":"vtk = VTKFile(get_example_file(\"celldata_appended_binary_compressed.vtu\"))","category":"page"},{"location":"","page":"Home","title":"Home","text":"To retrieve information about the cell data, use","category":"page"},{"location":"","page":"Home","title":"Home","text":"cell_data = get_cell_data(vtk)","category":"page"},{"location":"","page":"Home","title":"Home","text":"The return object of type VTKCellData allows access to the individual VTKDataArrays using a dictionary-like syntax:","category":"page"},{"location":"","page":"Home","title":"Home","text":"element_ids = cell_data[\"element_ids\"]","category":"page"},{"location":"","page":"Home","title":"Home","text":"Finally, the actual data can be obtained by executing","category":"page"},{"location":"","page":"Home","title":"Home","text":"data = get_data(element_ids)","category":"page"},{"location":"","page":"Home","title":"Home","text":"Full example including REPL output:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> using ReadVTK\n\njulia> vtk = VTKFile(get_example_file(\"celldata_appended_binary_compressed.vtu\"))\nVTKFile(\"celldata_appended_binary_compressed.vtu\", <XMLDocument>, \"UnstructuredGrid\", \"1.0.0\", \"LittleEndian\", \"vtkZLibDataCompressor\", <appended_data>, 4434, 3085)\n\njulia> cell_data = get_cell_data(vtk)\nVTKData()\n\njulia> element_ids = cell_data[\"element_ids\"]\nVTKDataArray(\"element_ids\")\n\njulia> data = get_data(element_ids)\n3085-element reinterpret(Int64, ::Vector{UInt8}):\n    1\n    2\n    3\n    ⋮\n 3083\n 3084\n 3085","category":"page"},{"location":"","page":"Home","title":"Home","text":"Further example VTK files can be found in the ReadVTK_examples repository.","category":"page"},{"location":"#What-works","page":"Home","title":"What works","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Reading in VTK XML files of type UnstructuredGrid\nExtracting cell or point data\nExtracting point coordinates\nExtracting information about cell types","category":"page"},{"location":"#What-does-not-work","page":"Home","title":"What does not work","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Reading VTK files not stored in the VTK XML format\nReading VTK files of other type than UnstructuredGrid\nMultiblock files, PVD files\nDifferent byte orders in file and host system\nProbably reading from VTK files that were not created by WriteVTK.jl will fail, specifically since\ncompressed data is assumed to be stored as a single block\nappended data is assumed to be stored as raw\nheader_type is hardcoded to UInt64\nLikely anything else that is not specifically mentioned under What works","category":"page"},{"location":"#Development","page":"Home","title":"Development","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Helpful resources for working with (i.e., reading and writing) VTK XML files:","category":"page"},{"location":"","page":"Home","title":"Home","text":"VTK file format documentation (incomplete!) as a PDF\nVTK XML formats wiki article\nBlog post on encoding binary data\nMailing list message on encoding binary data","category":"page"},{"location":"#Authors","page":"Home","title":"Authors","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"ReadVTK is maintained by the Trixi authors. Its principal developers are Michael Schlottke-Lakemper (University of Stuttgart, Germany) and Hendrik Ranocha (University of Hamburg, Germany).","category":"page"},{"location":"#License-and-contributing","page":"Home","title":"License and contributing","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"ReadVTK is licensed under the MIT license (see License). Since ReadVTK is an open-source project, we are very happy to accept contributions from the community. Please refer to Contributing for more details. To get in touch with the developers, join us on Trixi's Slack workspace or create an issue.","category":"page"},{"location":"#Acknowledgments","page":"Home","title":"Acknowledgments","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This package would not exist without the nice work of  Juan Ignacio Polanco and his cleanly written and well-documented package WriteVTK.jl. ","category":"page"}]
}
